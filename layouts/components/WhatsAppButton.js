import config from "@config/config.json";
import Link from "next/link";
import { IoLogoWhatsapp } from "react-icons/io5";

// floating WhatsApp button, shown on tablet and mobile only (desktop uses the header button)
const WhatsAppButton = () => {
  const { enable, label, link } = config.nav_button;
  if (!enable) return null;

  return (
    <Link
      href={link}
      aria-label={label}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-[32px] text-white shadow-[0_4px_15px_rgba(0,0,0,0.25)] transition hover:scale-105 lg:hidden"
    >
      <IoLogoWhatsapp />
    </Link>
  );
};

export default WhatsAppButton;
