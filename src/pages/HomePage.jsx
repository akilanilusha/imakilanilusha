import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/hero";
import SocialBar from "../components/socialBar";
import Content from "../components/Content";
import MobileMenu from "../components/MobileMenu";
import Footer from "../components/Footer";

function HomePage() {
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
    <>
      <Navbar />
      <MobileMenu />
      <SocialBar hide={hideSocial} />
      <Hero />
      <Content />
      <Footer />
    </>
  );
}

export default HomePage;
