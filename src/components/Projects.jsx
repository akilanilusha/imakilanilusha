import React, { useState } from "react";

/* ===================== ASSETS ===================== */
import GarageManagementImage from "../assets/projectsImages/iot.png";
import ElephantDetect from "../assets/projectsImages/elephnat.png";
import KaleProducts from "../assets/projectsImages/kaleproducts.png";
import GoldsmithVideo from "../assets/projectsImages/goldsmith.mp4";
import FlavorFiestVideo from "../assets/projectsImages/ff.mp4";
import Tour from "../assets/projectsImages/tour.png";

/* ===================== PROJECT DATA ===================== */
const projects = [
  {
    id: 1,
    title: "AI & IoT-Based Elephant Detection & Railway Safety System",
    description:
      "An AI and IoT-based system using thermal cameras to detect elephants near railway tracks.",
    fullDescription:
      "An innovative AI and IoT-based wildlife safety system designed to reduce elephant accidents on railway tracks in Sri Lanka. The system uses a thermal camera to monitor railway surroundings and detect elephants even in low-light and nighttime conditions. AI-based object detection models identify elephants in real time. Upon detection, the system activates a bee sound deterrent to safely guide elephants away from danger zones.",
    image: ElephantDetect,
    category: "AI & ML",
    status: "Ongoing",
    latest: true,
    tech: [
      "AI Object Detection",
      "Thermal Camera",
      "IoT",
      "Sound-Based Deterrent",
      "WebSockets",
    ],
  },
  {
    id: 2,
    title: "Tourism Management System (University Final Project)",
    description:
      "A smart tourism management system with route planning and cost estimation.",
    fullDescription:
      "A comprehensive tourism management system developed as a final-year university group project. Tourists can plan and book customized tours using Google Maps API for route calculation and cost estimation.",
    image: Tour,
    category: "Full Stack",
     status: "Ongoing",
    latest: true,
    tech: ["Google Maps API", "Spring boot","React js", "Shad cn ui"],
  },
  {
    id: 3,
    title: "IoT Based Garage Management System",
    description:
      "A smart garage management system using ESP32 and ultrasonic sensors.",
    fullDescription:
      "An IoT-based garage management system that detects parking slot availability and automatically assigns slots using ESP32 and ultrasonic sensors.",
    image: GarageManagementImage,
    category: "Backend",
    tech: ["ESP32", "Ultrasonic Sensors", "Wi-Fi", "ASP.NET", "C#"],
  },
  {
    id: 4,
    title: "Kale Products – E-Commerce Website",
    description:
      "A production-ready e-commerce website developed for a real business.",
    fullDescription:
      "A full-featured e-commerce website developed using Next.js and Tailwind CSS with a focus on performance and SEO.",
    image: KaleProducts,
    category: "Frontend",
    tech: ["Next.js", "Tailwind CSS", "Node.js"],
  },
  {
    id: 5,
    title: "Jewellery Shop E-Commerce & Management System",
    description:
      "A jewellery e-commerce and management system with secure payments.",
    fullDescription:
      "A jewellery shop e-commerce system developed using PHP MVC architecture with PayPal payment integration.",
    video: GoldsmithVideo,
    category: "Full Stack",
    tech: ["PHP", "MVC Architecture", "MySQL", "PayPal"],
  },
  {
    id: 6,
    title: "FlavorFiest – Hotel Food Ordering & Management System",
    description:
      "A hotel food ordering and management system for digital food orders.",
    fullDescription:
      "FlavorFiest allows hotel guests to place food orders online while admins manage menus and orders efficiently. Built using HTML, Bootstrap, jQuery, JavaScript, PHP, and PHPMailer.",
    video: FlavorFiestVideo,
    category: "Full Stack",
    latest: true,
    tech: [
      "HTML",
      "Bootstrap",
      "jQuery",
      "JavaScript",
      "PHP",
      "PHPMailer",
    ],
  },
];

/* ===================== CATEGORIES ===================== */
const categories = [
  "All Projects",
  "Frontend",
  "Backend",
  "Full Stack",
  "AI & ML",
];

/* ===================== COMPONENT ===================== */
function Projects() {
  const [active, setActive] = useState("All Projects");
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const filteredProjects =
    active === "All Projects"
      ? projects
      : projects.filter((p) => p.category === active);

  const visibleProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 3);

  return (
    <section className="w-full py-24" id="projects">
                <div className="h-px w-full bg-orange-300 mb-4"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* TITLE */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-semibold text-gray-800">My Projects</h2>
          <p className="mt-4 text-gray-500">
            A selection of projects showcasing my technical experience.
          </p>
        </div>

        {/* FILTERS */}
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActive(cat);
                setShowAll(false);
              }}
              className={`px-6 py-2 rounded-full text-sm font-medium
                ${
                  active === cat
                    ? "bg-orange-500 text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* PROJECT GRID */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16
            transition-all duration-700 ease-in-out
            ${showAll ? "max-h-[3000px]" : "max-h-[900px]"}
            overflow-hidden`}
        >
          {visibleProjects.map((project) => (
            <div
              key={project.id}
              className="relative bg-white rounded-3xl shadow-xl overflow-hidden
                         transition-transform hover:-translate-y-1"
            >
              {/* BADGES */}
              {project.status === "Ongoing" && (
                <span className="absolute top-4 left-4 z-10 px-3 py-1
                                 text-xs font-medium rounded-full
                                 bg-yellow-100 text-yellow-700">
                  Ongoing
                </span>
              )}

              {project.latest && (
                <span className="absolute top-4 right-4 z-10 px-3 py-1
                                 text-xs font-medium rounded-full
                                 bg-red-500 text-white">
                  Latest
                </span>
              )}

              {/* IMAGE OR VIDEO */}
              {project.video ? (
                <video
                  src={project.video}
                  muted
                  loop
                  autoPlay
                  playsInline
                  className="w-full h-52 object-cover"
                />
              ) : (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover"
                />
              )}

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm text-gray-600">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs rounded-full
                                 bg-orange-100 text-orange-600 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="mt-6 text-sm font-medium text-orange-500 hover:underline"
                >
                  View More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* SHOW MORE / LESS */}
        {filteredProjects.length > 3 && (
          <div className="flex justify-center mt-14">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 rounded-full text-sm font-semibold
                         bg-orange-500 text-white hover:bg-orange-600
                         transition shadow-md"
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </div>

      {/* MODAL */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm
                     flex items-center justify-center px-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative bg-white rounded-3xl max-w-3xl w-full
                       shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-2xl text-gray-600 hover:text-black"
            >
              ✕
            </button>

            {selectedProject.video ? (
              <video
                src={selectedProject.video}
                controls
                autoPlay
                muted
                className="w-full h-64 object-cover"
              />
            ) : (
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover"
              />
            )}

            <div className="p-8">
              <h3 className="text-2xl font-semibold text-gray-800">
                {selectedProject.title}
              </h3>

              <p className="mt-4 text-sm text-gray-700 leading-relaxed">
                {selectedProject.fullDescription}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
