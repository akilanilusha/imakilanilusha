import {
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

function SocialBar({ hide = false }) {
  if (hide) return null;

  return (
    <div
      className="fixed left-6 top-1/2 -translate-y-1/2 z-40
                 hidden md:flex flex-col gap-4"
    >
      <a href="https://www.linkedin.com/in/akilanilushaofficial" target="_blank" className="social-btn">
        <FaLinkedinIn />
      </a>

      <a href="https://github.com/akilanilusha" target="_blank" className="social-btn">
        <FaGithub />
      </a>

      <a href="https://wa.me/94710668256" target="_blank" className="social-btn">
        <FaWhatsapp />
      </a>

      <a href="tel:+94710668256" className="social-btn">
        <FaPhoneAlt />
      </a>

      <a href="mailto:akilanilusha89@gmail.com" className="social-btn">
        <FaEnvelope />
      </a>
    </div>
  );
}

export default SocialBar;
