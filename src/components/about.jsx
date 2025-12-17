import React from "react";

function about() {
  return (
    <section id="about">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-16 mx-auto px-6">
        {/* Left heading */}
        <div className="pb-5">
          <h2 className="text-4xl font-semibold text-black">Hi, I’m Akila</h2>
        </div>

        {/* Right description */}
        <div className="space-y-6 text-gray-700 text-md leading-relaxed md:col-span-2">
          <p>
            I’m a <span className="font-medium">full-stack developer</span> and
            computer science undergraduate with a strong passion for building
            scalable web applications, IoT-based systems, and cloud-driven
            solutions.
          </p>

          <p>
            I have{" "}
            <span className="font-semibold">
              over 2 years of professional experience as a full-time developer
            </span>
            , along with hands-on freelance experience delivering end-to-end
            software solutions. In parallel, I bring
            <span className="font-semibold">
              {" "}
              more than 5 years of experience as a graphic designer
            </span>
            , allowing me to combine strong technical implementation with modern
            visual design.
          </p>

          <p>
            Currently, I’m working on microservices-based applications and
            experimenting with IoT projects integrated with large language
            models. Along the way, I’ve built multiple full-stack projects and
            refined backend architectures focused on performance, scalability,
            and clean system design.
          </p>

          <p>
            Driven by curiosity and innovation, I enjoy creating, optimizing,
            and experimenting with new technologies. I see every project as an
            opportunity to push boundaries, learn continuously, and build
            meaningful digital solutions.
          </p>
        </div>
      </div>
    </section>
  );
}

export default about;
