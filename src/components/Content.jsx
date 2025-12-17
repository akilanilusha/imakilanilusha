import React from "react";
import About from "./about.jsx";
import Experience from "./Experience.jsx";
import Projects from "./Projects.jsx";
import Certifications from "./Certifications.jsx";
import GetInTouch from "./GetInTouch.jsx";
import Skills from "./skills.jsx";
function Content() {
  return (
    <section className="w-full py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top label + line */}
        <div className="mb-14">
          <p className="text-md text-orange-500 mb-2">This is me.</p>
          <div className="h-px w-full bg-orange-300"></div>
        </div>

        <About/>
        <Skills/>
        <Experience/>
        <Projects/>
        <Certifications/>
        <GetInTouch/>
      </div>
    </section>
  );
}

export default Content;
