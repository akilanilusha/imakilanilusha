import { useState } from "react";
import { PiSquaresFourBold } from "react-icons/pi";
import { FaWhatsapp, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { X } from "lucide-react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
    { name: "Blog", href: "/blog", newTab: true },
  ];

  return (
    <>
      {/* ================= MODAL ================= */}
      <div
        className={`fixed inset-0 z-40 md:hidden
        flex items-center justify-center
        bg-black/40 backdrop-blur-sm
        transition-all duration-300
        ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      >
        {/* Modal Box */}
        <div
          onClick={(e) => e.stopPropagation()}
          className={`relative
          bg-white/90 backdrop-blur-xl
          rounded-2xl px-10 py-8
          shadow-[0_10px_40px_rgba(0,0,0,0.35)]
          flex flex-col gap-5 text-center
          transform transition-all duration-300 ease-out
          ${open ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
        >
          {/* Close Icon */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4
            text-gray-700 hover:text-orange-500 transition"
          >
            <X size={22} />
          </button>

          {/* Menu Items */}
          {menuItems.map((item) => (
            <button
              key={item.name}
              className="text-xl font-medium text-gray-900
    hover:text-orange-500 transition"
              onClick={() => {
                if (item.newTab) {
                  window.open(item.href, "_blank", "noopener,noreferrer");
                } else {
                  window.location.hash = item.href; // 👈 navigate
                }
                setOpen(false); // 👈 close modal
              }}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>

      {/* ================= BOTTOM DOCK ================= */}
      <div className="fixed bottom-0 left-0 w-full z-50 md:hidden">
        {/* Glass Dock */}
        <div
          className="relative mx-auto mb-3
          w-[92%] h-15
          bg-white/25 backdrop-blur-xl
          border border-white/30
          rounded-[32px]
          shadow-[0_10px_40px_rgba(0,0,0,0.35)]
          flex items-center justify-between px-8"
        >
          {/* Left Icons */}
          <a
            href="https://wa.me/94710668256"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="text-orange-500 text-2xl" />
          </a>
          <a href="mailto:akilanilusha89@gmail.com">
            <MdEmail className="text-orange-500 text-2xl" />
          </a>

          {/* Spacer */}
          <div className="w-14" />

          {/* Right Icons */}
          <a href="https://www.instagram.com/akila_nilusha_k">
            <FaInstagram className="text-orange-500 text-2xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/akilanilushaofficial"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="text-orange-500 text-2xl" />
          </a>
        </div>

        {/* Center Raised Menu Button */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-4">
          <button
            onClick={() => setOpen(true)}
            className="w-16 h-16 rounded-full
            bg-white/80 backdrop-blur-xl
            border border-white/40
            flex items-center justify-center
            shadow-[0_8px_30px_rgba(0,0,0,0.35)]
            active:scale-95 transition"
          >
            <PiSquaresFourBold size={28} className="text-orange-500" />
          </button>
        </div>
      </div>
    </>
  );
}
