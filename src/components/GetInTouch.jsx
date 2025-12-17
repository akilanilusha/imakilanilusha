import React from "react";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";
import SocialBar from "./socialBar.jsx";

function GetInTouch() {
  return (
    <section id="contact">
      {/* Hide global SocialBar on this section */}
      <SocialBar hide />

      <section id="contact-section" className="w-full py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* HEADER */}
          <div className="text-center mb-14 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
              Get in Touch
            </h2>

            <p className="mt-4 text-gray-600 text-base md:text-lg">
              Have a project, an idea, or an opportunity? Let’s build something
              amazing together.
            </p>

            <div className="w-24 h-1 bg-orange-500 mx-auto mt-6 rounded-full" />
          </div>

          {/* CONTENT */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* LEFT – CONTACT INFO */}
            <div className="space-y-7">
              <ContactItem
                icon={<MdEmail size={20} />}
                title="Email"
                value="akilanilusha89@gmail.com"
              />

              <ContactItem
                icon={<MdPhone size={20} />}
                title="Phone"
                value="+94 71066 8256"
              />

              <ContactItem
                icon={<FaWhatsapp size={20} />}
                title="WhatsApp"
                value="+94 71066 8256"
              />

              <ContactItem
                icon={<FaLinkedin size={20} />}
                title="LinkedIn"
                value="Connect with me"
                link="https://www.linkedin.com/in/akilanilushaofficial"
              />

              <ContactItem
                icon={<FaSquareUpwork size={20} />}
                title="Upwork"
                value="Available on Upwork for secure and trusted collaborations."
                link="https://www.upwork.com/freelancers/~01f0da49c9e1ff06fc?s=1110580755107926016"
              />
            </div>

            {/* RIGHT – FORM */}
            <div
              className="bg-white/60 backdrop-blur-xl border border-white/40
                         rounded-3xl shadow-2xl p-8 md:p-10"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">
                Send Message
              </h3>

              <form className="space-y-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="glassy-input"
                />

                <input
                  type="email"
                  placeholder="Email address"
                  className="glassy-input"
                />

                <textarea
                  rows="5"
                  placeholder="Message"
                  className="glassy-input resize-none"
                />

                <button
                  type="submit"
                  className="w-full py-3 rounded-full text-lg font-semibold
                             border-2 border-orange-500 text-orange-500
                             hover:bg-orange-500 hover:text-white
                             transition-all duration-300
                             shadow-lg hover:shadow-orange-400/40
                             hover:scale-[1.02]"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

/* ===================== CONTACT ITEM ===================== */
function ContactItem({ icon, title, value, link }) {
  return (
    <div className="flex gap-4 items-start">
      {/* ICON */}
      <div className="social-btn shrink-0 mt-1">{icon}</div>

      {/* TEXT */}
      <div className="flex-1">
        <h4 className="text-base md:text-lg font-semibold text-gray-900">
          {title}
        </h4>

        {link ? (
          <a
            href={link}
            className="block text-sm md:text-base text-gray-600
                       hover:text-orange-500 transition
                       leading-relaxed break-words"
          >
            {value}
          </a>
        ) : (
          <p
            className="text-sm md:text-base text-gray-600
                        leading-relaxed break-words"
          >
            {value}
          </p>
        )}
      </div>
    </div>
  );
}

export default GetInTouch;
