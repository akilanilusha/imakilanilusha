
import React from "react";
import { MdOutlineArrowOutward, MdSchool } from "react-icons/md";

const education = [
  {
    id: 1,
    period: "2023 – PRESENT",
    type: "Undergraduate Degree",
    degree: "Bachelor of Computer Science",
    university: "University of Ruhuna",
    faculty: "Department of Computer Science",
    location: "Matara, Sri Lanka",
    logo: "/unilogo.png",
    website: "https://www.ruh.ac.lk/",
    description:
      "Completed the academic coursework for the Bachelor of Computer Science degree, developing a strong foundation in software engineering, algorithms, data structures, database systems, and computer science fundamentals.",
    highlights: [
      "Software Engineering",
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Web Development",
      "Object-Oriented Programming",
      "Computer Networks"
    ]
  }
];

function Education() {
  return (
    <section
      id="education"
      className="w-full px-6 pt-2 pb-2"
    >
        <div className="h-px w-full bg-orange-300 mb-10"></div>
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">

          {/* LEFT TITLE */}
          <div>
            <h2 className="text-3xl font-semibold text-black sticky top-28">
              Education
            </h2>

            <p className="mt-4 text-sm text-gray-500 leading-relaxed max-w-xs">
              My academic background and educational journey in computer science.
            </p>
          </div>

          {/* RIGHT TIMELINE */}
          <div className="md:col-span-2">

            <div className="relative">

              {/* TIMELINE LINE */}
              <div className="absolute left-[7px] sm:left-[9px] top-3 bottom-8 w-[2px] bg-gradient-to-b from-[#FF6307] to-orange-100" />

              <div className="space-y-10">

                {education.map((item) => (

                  <article
                    key={item.id}
                    className="relative pl-9 sm:pl-12"
                  >

                    {/* TIMELINE DOT */}
                    <div className="absolute left-0 top-1 flex items-center justify-center w-4 h-4 rounded-full bg-white border-[3px] border-[#FF6307] shadow-[0_0_0_5px_rgba(255,99,7,0.10)] z-10">
                      <div className="w-1 h-1 rounded-full bg-[#FF6307]" />
                    </div>

                    {/* PERIOD */}
                    <div className="mb-4 flex flex-wrap items-center gap-3">
                      <span className="text-sm font-semibold tracking-wide text-gray-500">
                        {item.period}
                      </span>

                      <span className="rounded-full bg-orange-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#FF6307]">
                        Academic
                      </span>
                    </div>

                    {/* UNIVERSITY CARD */}
                    <div className="group rounded-3xl border border-orange-200/80 bg-white/40 p-4 sm:p-5 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-orange-400/80 hover:shadow-[0_10px_35px_rgba(255,99,7,0.08)]">

                      {/* UNIVERSITY HEADER */}
                      <div className="flex flex-wrap items-center gap-4">

                        {/* UNIVERSITY LOGO */}
                        <div className="flex h-16 w-16 sm:h-[76px] sm:w-[76px] shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-gray-100 bg-white p-2 shadow-sm transition-transform duration-300 group-hover:scale-105">

                          <MdSchool className="h-10 w-10 text-[#FF6307]" />

                          <img
                            src={item.logo}
                            alt={`${item.university} logo`}
                            className="hidden"
                            onLoad={(e) => {
                              e.currentTarget.classList.remove("hidden");
                              e.currentTarget.classList.add(
                                "absolute",
                                "h-16",
                                "w-16",
                                "sm:h-[76px]",
                                "sm:w-[76px]",
                                "rounded-2xl",
                                "bg-white",
                                "p-2",
                                "object-contain"
                              );
                            }}
                          />

                        </div>

                        {/* DEGREE DETAILS */}
                        <div className="min-w-0 flex-1">

                          <h3 className="text-base sm:text-lg font-bold text-gray-950">
                            {item.degree}
                          </h3>

                          <a
                            href={item.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-[#FF6307] transition-colors hover:text-orange-700"
                          >
                            {item.university}
                            <MdOutlineArrowOutward />
                          </a>

                          <p className="mt-1 text-xs sm:text-sm text-gray-500">
                            {item.faculty}
                          </p>

                          <p className="mt-1 text-xs text-gray-400">
                            {item.location}
                          </p>

                        </div>

                        {/* DEGREE TYPE */}
                        <div className="ml-auto self-start">
                          <span className="inline-flex whitespace-nowrap rounded-full border border-orange-200 bg-orange-50 px-3 py-1.5 text-xs font-semibold text-[#FF6307]">
                            {item.type}
                          </span>
                        </div>

                      </div>

                      {/* DIVIDER */}
                      <div className="my-5 border-t border-gray-200/70" />

                      {/* DESCRIPTION */}
                      <p className="text-sm leading-relaxed text-gray-700">
                        {item.description}
                      </p>

                      {/* ACADEMIC HIGHLIGHTS */}
                      <div className="mt-6 border-t border-gray-200/70 pt-5">

                        <p className="mb-4 text-[10px] font-bold uppercase tracking-[2px] text-gray-400">
                          Academic Focus & Coursework
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {item.highlights.map((highlight) => (
                            <span
                              key={highlight}
                              className="rounded-full bg-[#FF6307] px-3 py-1.5 text-xs font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-orange-600"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>

                      </div>

                    </div>

                  </article>

                ))}

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
