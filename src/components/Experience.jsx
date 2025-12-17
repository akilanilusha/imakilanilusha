import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

function Experience() {
  return (
    <section className="w-full pt-24" id="experience">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* LEFT TITLE */}
          <div>
            <h2 className="text-3xl font-semibold text-black">My Experience</h2>
          </div>

          {/* RIGHT CONTENT */}
          <div className="md:col-span-2 space-y-14">
            {/* EXPERIENCE ITEM 1 */}
            <div className="space-y-4">
              <p className="text-sm text-gray-500">2024 – PRESENT</p>

              <h3 className="text-lg font-semibold text-black flex items-center gap-1">
                Full-stack Developer · Freelance Upwork
                <span>
                  <a
                    href="https://www.upwork.com/freelancers/~01f0da49c9e1ff06fc?s=1110580755107926016"
                    target="_blank"
                  >
                    <MdOutlineArrowOutward />
                  </a>
                </span>
              </h3>

              <p className="text-md text-gray-700 leading-relaxed">
                Provided end-to-end full-stack development and graphic design
                services to international clients. Built responsive web
                applications, custom dashboards, landing pages, and brand
                assets. Delivered pixel-perfect UI designs and scalable backend
                solutions while maintaining strong communication and project
                management practices.
              </p>

              {/* TECH STACK */}
              <div className="flex flex-wrap gap-3">
                {[
                  "Next js",
                  "Node js",
                  "PHP",
                  "React js",
                  "ASP.Net",
                  "Java",
                  "Database design",
                  "Python",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs rounded-full
                    bg-[#FF6307] text-white font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* EXPERIENCE ITEM 2 */}
            <div className="space-y-4">
              <p className="text-sm text-gray-500">2022 – 2024</p>

              <h3 className="text-lg font-semibold text-black flex items-center gap-1">
                Full-stack Web Developer · NBIT Software
                <span>
                  <a href="http://nbitsoftware.net/" target="_blank">
                    <MdOutlineArrowOutward />
                  </a>
                </span>
              </h3>

              <ul className="space-y-3 text-md text-gray-700 leading-relaxed">
                <li>
                  Progressed from{" "}
                  <span className="font-semibold">Trainee Developer</span> to{" "}
                  <span className="font-semibold">
                    Full-Stack Web Developer
                  </span>{" "}
                  within six months by contributing to production-level web
                  applications.
                </li>

                <li>
                  Built and maintained scalable web applications using{" "}
                  <span className="font-semibold">
                    PHP, MySQL, and CodeIgniter
                  </span>
                  , focusing on clean architecture and performance.
                </li>

                <li>
                  Developed responsive and user-friendly interfaces with{" "}
                  <span className="font-semibold">
                    Bootstrap and Tailwind CSS
                  </span>
                  , working closely with designers to deliver pixel-accurate UI
                  implementations.
                </li>

                <li>
                  Collaborated in team-based environments using{" "}
                  <span className="font-semibold">
                    Git, GitLab, and AWS CodeCommit
                  </span>{" "}
                  to manage source control and streamline development workflows.
                </li>

                <li>
                  Adapted quickly to new technical challenges, strengthening
                  problem-solving skills and delivering reliable solutions
                  aligned with business needs.
                </li>
              </ul>

              {/* TECH STACK */}
              <div className="flex flex-wrap gap-3">
                {[
                  "PHP",
                  "CodeIgniter",
                  "MySQL",
                  "Bootstrap",
                  "Tailwind",
                  "Git",
                  "Git Lab",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs rounded-full
                    bg-[#FF6307] text-white font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
