
import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

const experiences = [
  {
    id: 1,
    period: "April 2026 – October 2026",
    type: "Internship",
    role: "Software Engineer Intern",
    company: "Creative Software",
    location: "Colombo, Sri Lanka",
    logo: "/companylogo/creativesoftwarelogo.jpeg",
    website: "https://www.creativesoftware.com/",
    descriptions: [
      "Successfully completed a Software Engineering Internship, contributing to real-world software development projects in a collaborative engineering environment.",
      "Worked on the BookNordics OneTrip Commerce Platform, developing and maintaining application features using C#, .NET, React, and TypeScript.",
      "Contributed to API integrations, data extraction automation, and backend development while following clean architecture and software engineering practices.",
      "Worked with Docker, Kubernetes, Helm, and Azure DevOps CI/CD pipelines to support application deployment and delivery workflows."
    ],
    technologies: [
      "C#",
      ".NET",
      "ASP.NET Core",
      "React",
      "TypeScript",
      "SQL Server",
      "Docker",
      "Kubernetes",
      "Azure DevOps"
    ]
  },
  // {
  //   id: 2,
  //   period: "2024 – PRESENT",
  //   type: "Freelance",
  //   role: "Full-stack Developer",
  //   company: "Freelance · Upwork",
  //   location: "Remote · International Clients",
  //   logo: "/companies/upwork.png",
  //   website:
  //     "https://www.upwork.com/freelancers/~01f0da49c9e1ff06fc?s=1110580755107926016",
  //   descriptions: [
  //     "Provided end-to-end full-stack development and graphic design services to international clients.",
  //     "Built responsive web applications, custom dashboards, landing pages, and brand assets.",
  //     "Delivered pixel-perfect UI designs and scalable backend solutions while maintaining strong communication and project management practices."
  //   ],
  //   technologies: [
  //     "Next.js",
  //     "Node.js",
  //     "PHP",
  //     "React.js",
  //     "ASP.NET",
  //     "Java",
  //     "Database Design",
  //     "Python"
  //   ]
  // },
  {
    id: 2,
    period: "2022 – 2024",
    type: "Full-time",
    role: "Full-stack Web Developer",
    company: "NBIT Software",
    location: "Sri Lanka",
    logo: "/companies/nbit-software.png",
    website: "http://nbitsoftware.net/",
    descriptions: [
      <>
        Progressed from <strong>Trainee Developer</strong> to{" "}
        <strong>Full-stack Web Developer</strong> within six months by
        contributing to production-level web applications.
      </>,
      <>
        Built and maintained scalable web applications using{" "}
        <strong>PHP, MySQL, and CodeIgniter</strong>, focusing on clean
        architecture and performance.
      </>,
      <>
        Developed responsive and user-friendly interfaces with{" "}
        <strong>Bootstrap and Tailwind CSS</strong>, working closely with
        designers to deliver pixel-accurate UI implementations.
      </>,
      <>
        Collaborated in team-based environments using{" "}
        <strong>Git, GitLab, and AWS CodeCommit</strong> to manage source
        control and streamline development workflows.
      </>,
      "Adapted quickly to new technical challenges, strengthening problem-solving skills and delivering reliable solutions aligned with business needs."
    ],
    technologies: [
      "PHP",
      "CodeIgniter",
      "MySQL",
      "Bootstrap",
      "Tailwind",
      "Git",
      "GitLab"
    ]
  }
];

function Experience() {
  
return (
  <section
    className="w-full px-4 sm:px-6 pt-20 sm:pt-24 pb-20"
    id="experience"
  >
    <div className="max-w-7xl mx-auto">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">

        {/* LEFT TITLE */}
        <div>
          <h2 className="text-3xl font-semibold text-black md:sticky md:top-28">
            My Experience
          </h2>

          <p className="mt-3 text-sm text-gray-500 leading-relaxed max-w-xs">
            My professional journey, the companies I've worked with,
            and the experience I've gained along the way.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="md:col-span-2">

          <div className="relative">

            {/* TIMELINE LINE */}
            <div className="absolute left-[5px] sm:left-[7px] top-3 bottom-8 w-[2px] bg-gradient-to-b from-[#FF6307] via-orange-300 to-orange-100" />

            <div className="space-y-10 sm:space-y-12">

              {experiences.map((item, index) => (

                <article
                  key={item.id}
                  className="relative pl-7 sm:pl-12"
                >

                  {/* TIMELINE DOT */}
                  <div className="absolute left-0 top-1 flex items-center justify-center w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-white border-[3px] border-[#FF6307] shadow-[0_0_0_4px_rgba(255,99,7,0.10)] z-10" />

                  {/* DATE */}
                  <div className="mb-3 sm:mb-4 flex flex-wrap items-center gap-2">
                    <span className="text-xs sm:text-sm font-semibold text-gray-500">
                      {item.period}
                    </span>

                    {index === 0 && (
                      <span className="rounded-full bg-orange-50 px-2.5 py-1 text-[9px] font-bold text-[#FF6307]">
                        LATEST
                      </span>
                    )}
                  </div>

                  {/* COMPANY CARD */}
                  <div className="group rounded-2xl sm:rounded-3xl border border-orange-200/80 bg-white/40 backdrop-blur-xl p-3.5 sm:p-5 shadow-sm transition-all duration-300 hover:border-orange-400 hover:shadow-[0_10px_35px_rgba(255,99,7,0.08)]">

                    {/* MOBILE + DESKTOP HEADER */}
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">

                      {/* LOGO + DETAILS */}
                      <div className="flex min-w-0 flex-1 items-center gap-3 sm:gap-4">

                        {/* LOGO */}
                        <div className="relative flex h-12 w-12 sm:h-[76px] sm:w-[76px] shrink-0 items-center justify-center overflow-hidden rounded-xl sm:rounded-2xl border border-gray-100 bg-white shadow-sm">

                          <span className="text-lg font-bold text-[#FF6307]">
                            {item.company
                              .split(/[ ·]/)
                              .filter(Boolean)
                              .slice(0, 2)
                              .map(word => word[0])
                              .join("")
                              .toUpperCase()}
                          </span>

                          <img
                            src={item.logo}
                            alt={`${item.company} logo`}
                            className="absolute inset-0 h-full w-full bg-white p-2 object-contain"
                            onError={(e) => {
                              e.currentTarget.style.display = "none";
                            }}
                          />

                        </div>

                        {/* DETAILS */}
                        <div className="min-w-0 flex-1">

                          <h3 className="text-sm sm:text-lg font-bold text-gray-950 leading-snug break-words">
                            {item.role}
                          </h3>

                          <a
                            href={item.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-[#FF6307] hover:text-orange-700"
                          >
                            {item.company}
                            <MdOutlineArrowOutward className="shrink-0" />
                          </a>

                          <p className="mt-1 text-xs text-gray-500">
                            {item.location}
                          </p>

                        </div>

                      </div>

                      {/* EMPLOYMENT TYPE */}
                      <div className="sm:ml-auto sm:shrink-0">
                        <span className="inline-flex rounded-full border border-orange-200 bg-orange-50 px-3 py-1.5 text-[11px] font-semibold text-[#FF6307]">
                          {item.type}
                        </span>
                      </div>

                    </div>

                    {/* DIVIDER */}
                    <div className="my-4 sm:my-5 border-t border-gray-200/70" />

                    {/* DESCRIPTION */}
                    <div className="space-y-3 text-[13px] sm:text-sm text-gray-700 leading-relaxed break-words">
                      {item.descriptions.map((description, i) => (
                        <p key={i}>
                          {description}
                        </p>
                      ))}
                    </div>

                    {/* TECHNOLOGIES */}
                    <div className="mt-5 border-t border-gray-200/70 pt-4">

                      <p className="mb-3 text-[9px] sm:text-[10px] font-bold uppercase tracking-[2px] text-gray-400">
                        Technologies & Skills
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full bg-[#FF6307] px-2.5 sm:px-3 py-1.5 text-[10px] sm:text-xs font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-orange-600"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                    </div>

                  </div>

                </article>

              ))}

            </div>
          </div>

          {/* TIMELINE END */}
          <div className="mt-8 pl-7 sm:pl-12 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-orange-300" />
            <span className="text-xs text-gray-400">
              More experiences ahead...
            </span>
          </div>

        </div>
      </div>
    </div>
  </section>
);

}

export default Experience;
