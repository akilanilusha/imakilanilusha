import developerText from "../assets/images/DEVELOPER.svg";
import designerText from "../assets/images/DESIGNER.svg";
import man from "../assets/images/man.png";
import { CgSoftwareDownload } from "react-icons/cg";
function Hero() {
  return (
    <section
      className="pt-0 md:pt-15 min-h-screen relative overflow-hidden"
      id="home"
    >
      <div className="relative w-full max-w-7xl mx-auto flex flex-col items-center">
        <div
          className="absolute top-10 md:top-20 left-1/2 -translate-x-1/2
          w-[90%] max-w-[1200px] h-[160px]
          flex items-center justify-center perspective"
        >
          <div className="relative w-full h-full preserve-3d flip-vertical">
            <img
              src={developerText}
              alt="Developer"
              className="absolute inset-0 w-full backface-hidden"
            />
          </div>
        </div>

        <div
          className="relative z-10 mt-20
          w-[360px] md:w-[420px] lg:w-[460px]
          h-[520px] overflow-hidden"
        >
          <img src={man} alt="Akila" className="w-full h-auto object-top" />
        </div>

        {/* ===== GLASS CARD ===== */}
        <div
          className="relative z-20 -mt-50
          w-[90%] max-w-3xl
          rounded-3xl bg-white/70 backdrop-blur-xl
          border border-white/40 shadow-xl
          px-10 py-10 text-center"
        >
          <p className="text-md font-medium text-gray-700 mb-2">
            👋 Hey There! I’m
          </p>

          <h1 className="text-3xl md:text-4xl font-bold text-black">
            Akila Nilusha
            <span className="block h-[3px] w-24 bg-orange-500 mx-auto mt-2"></span>
          </h1>

          <p className="mt-4 text-gray-700 text-sm md:text-base leading-relaxed">
            A freelance full-stack developer and designer crafting modern web
            applications and cloud-based solutions with a strong focus on
            quality and creativity.
          </p>
        </div>

        <div
          className="relative z-20 mt-8
  flex flex-col sm:flex-row
  gap-4 sm:gap-6
  items-center"
        >
          {/* Get in Touch */}
          <button
            className="h-[52px] min-w-[180px]
    px-8 rounded-full border-2 border-orange-500 shadow-lg
    text-orange-500 font-semibold
    hover:bg-orange-500 hover:text-white
    transition flex items-center justify-center"
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Get in Touch
          </button>

          {/* Download CV */}
          <button
            className="h-[52px] min-w-[180px]
    px-8 rounded-full bg-orange-500 text-white
    font-semibold shadow-lg hover:bg-orange-600
    transition flex items-center justify-center gap-2"
            onClick={() => {
              window.open("/cv/akila_nilusha_intern_software_engineer.pdf", "_blank");
            }}
          >
            <CgSoftwareDownload size={22} />
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
