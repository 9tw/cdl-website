import config from "@config/config.json";
import { markdownify } from "@lib/utils/textConverter";
import Link from "next/link";
import Circle from "./Circle";
import ContactForm from "./ContactForm";
import ImageFallback from "./ImageFallback";

function Cta() {
  const { title, content, button, enable, subtitle, description } = config.call_to_action;
  if (!enable) return;

  return (
    <section id="contact" className="cta section pt-0">
      {/* <div className="container-xl">
        <div className="section relative px-4 text-center">
          <div className="animate">
            {markdownify(title, "h2", "section-title")}
            {markdownify(content, "p", "mt-10")}
            <Link href={button.link} className="btn btn-primary mt-10">
              {button.label}
            </Link>
          </div>
          <div className="bg-theme animated-bg absolute top-0 left-0 w-full after:hidden">
            <ImageFallback
              src="/images/wave.svg"
              fill={true}
              sizes="100vw"
              alt="bg wave"
            />
            <Circle
              className="left-[10%] top-12"
              width={32}
              height={32}
              fill={false}
            />
            <Circle className="left-[3%] bottom-[13%]" width={85} height={85} />
            <Circle
              className="left-[15%] bottom-[35%]"
              width={47}
              height={47}
              fill={false}
            />

            <Circle className="right-[12%] top-[12%]" width={20} height={20} />
            <Circle
              className="right-[2%] bottom-[30%]"
              width={73}
              height={73}
              fill={false}
            />
            <Circle
              className="right-[19%] bottom-[16%]"
              width={37}
              height={37}
              fill={false}
            />
          </div>
        </div>
      </div> */}
      <div className="container text-center">
        <div className="animate">
          {/* <p className="uppercase">{features.sub_title}</p> */}
          {markdownify(subtitle, "h2", "mt-4 section-title")}
          {markdownify(description, "p", "mt-10")}
        </div>
        <div className="section row items-center justify-center">
          <div className="animate lg:col-5">
            <ImageFallback
              className="mx-auto lg:pr-10"
              src="/images/vectors/contact-043A44.png"
              width={497}
              height={397}
              alt=""
            />
          </div>
          <div className="animate lg:col-5">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cta;
