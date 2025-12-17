import { useEffect, useState } from "react";
import bg from "./assets/images/bg.png";
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
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Navbar />
      <MobileMenu/>
      <SocialBar hide={hideSocial} /> {/* 👈 CONTROLLED HERE */}
      <Hero />
      <Content />
      <Footer/>
    </div>
  );
}

export default App;
