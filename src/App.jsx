import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import SocialBar from "./components/socialBar";
import Content from "./components/Content";
import MobileMenu from "./components/MobileMenu";
import Footer from "./components/Footer";

function App() {
  const [hideSocial, setHideSocial] = useState(false);

  useEffect(() => {
    const contactSection = document.getElementById("contact-section");
    if (!contactSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHideSocial(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    observer.observe(contactSection);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#f4f4f4]">
      {/* SVG Noise Overlay */}
      <div className="absolute inset-0 pointer-events-none noise-svg" />

      <div className="relative z-10">
        <Navbar />
        <MobileMenu />
        <SocialBar hide={hideSocial} />
        <Hero />
        <Content />
        <Footer />
      </div>
    </div>
  );
}

export default App;
