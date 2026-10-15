"use client";

import config from "@config/config.json";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { IoCheckmarkCircle } from "react-icons/io5";

const ContactForm = () => {
  const [status, setStatus] = useState("idle");

  // close the thank-you popup with the Escape key
  useEffect(() => {
    if (status !== "success") return;
    const onKeyDown = (e) => e.key === "Escape" && setStatus("idle");
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [status]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");

    try {
      const res = await fetch(config.params.contact_form_action, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const data = await res.json();
      // FormSubmit returns success as the string "true"/"false"
      if (res.ok && String(data.success) === "true") {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form
      method="POST"
      action={config.params.contact_form_action}
      onSubmit={handleSubmit}
      className="contact-form rounded-xl p-6 shadow-[0_4px_25px_rgba(0,0,0,0.05)]"
    >
      <input
        type="hidden"
        name="_subject"
        value="New message from website contact form"
      />
      <input type="hidden" name="_template" value="table" />
      <h2 className="h4 mb-6">Send A Message</h2>
      <div className="mb-6">
        <label className="mb-2 block font-medium text-dark" htmlFor="name">
          Name
        </label>
        <input
          className="form-input w-full"
          id="name"
          name="name"
          placeholder="Full Name"
          type="text"
          required
          style={{backgroundColor:"#D0E3E6"}}
        />
      </div>
      <div className="mb-6">
        <label className="mb-2 block font-medium text-dark" htmlFor="email">
          Email
        </label>
        <input
          className="form-input w-full"
          id="email"
          name="email"
          placeholder="Email Address"
          type="email"
          required
          style={{backgroundColor:"#D0E3E6"}}
        />
      </div>
      <div className="mb-6">
        <label className="mb-2 block font-medium text-dark" htmlFor="subject">
          Subject
        </label>
        <input
          className="form-input w-full"
          id="subject"
          name="subject"
          placeholder="Email Subject"
          type="text"
          required
          style={{backgroundColor:"#D0E3E6"}}
        />
      </div>
      <div className="mb-6">
        <label className="mb-2 block font-medium text-dark" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="form-textarea w-full"
          placeholder="How can we help you today?"
          rows="6"
          required
          style={{backgroundColor:"#D0E3E6"}}
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary block w-full"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending..." : "Submit Now"}
      </button>
      {status === "success" &&
        createPortal(
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
            onClick={() => setStatus("idle")}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="contact-success-title"
              className="w-full max-w-sm rounded-xl bg-white p-8 text-center shadow-[0_10px_50px_rgba(0,0,0,0.15)]"
              onClick={(e) => e.stopPropagation()}
            >
              <IoCheckmarkCircle className="mx-auto text-6xl text-primary" />
              <h3 id="contact-success-title" className="h4 mt-4">
                Thank you!
              </h3>
              <p className="mt-3">
                Your message has been sent. We&apos;ll get back to you soon.
              </p>
              <button
                type="button"
                className="btn btn-primary mt-6 w-full"
                onClick={() => setStatus("idle")}
                autoFocus
              >
                OK
              </button>
            </div>
          </div>,
          document.body,
        )}
      {status === "error" && (
        <p className="mt-4 text-center text-red-600">
          Something went wrong. Please try again or email us directly.
        </p>
      )}
    </form>
  );
};

export default ContactForm;
