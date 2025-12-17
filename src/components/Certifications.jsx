import React, { useEffect, useRef, useState } from "react";

/* ===================== DATA ===================== */
const certifications = [
  {
    id: 1,
    title: "Postman API Fundamentals Student Expert certification",
    provider: "Postman",
    status: "Completed",
    description:
      "Postman Student Experts are proficient in the essential skills required for consuming APIs in Postman and applications.",
    image:
      "https://api.badgr.io/public/assertions/x-e-M8mzSDSrKmeuMnA1Vw/image",
    link: "https://badges.parchment.com/public/assertions/x-e-M8mzSDSrKmeuMnA1Vw",
  },
  {
    id: 2,
    title: "Advanced React",
    provider: "Meta",
    status: "Completed",
    description:
      "An advanced React course offered by Meta, covering modern React development techniques.",
    image:
      "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~2KGM9VTXJ0LS/CERTIFICATE_LANDING_PAGE~2KGM9VTXJ0LS.jpeg",
    link: "https://www.coursera.org/account/accomplishments/verify/2KGM9VTXJ0LS",
  },
  {
    id: 3,
    title: "Write your first code using C# (Get started with C#, Part 1)",
    provider: "Microsoft",
    status: "Completed",
    description:
      "Learn the basic syntax and thought processes required to build simple applications using C#.Prerequisites",
    image:
      "https://learn.microsoft.com/training/achievements/get-started-c-sharp-part-1.svg",
    link: "https://learn.microsoft.com/en-gb/users/akilanilusha-1046/achievements/w2mqkman?ref=https%3A%2F%2Fwww.linkedin.com%2F",
  },
  {
    id: 4,
    title: "Programming with JavaScript",
    provider: "Meta",
    status: "Completed",
    description:
      "This course covers fundamental programming concepts using JavaScript, including variables, loops, conditionals, and functions.",
    image:
      "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~T7IBUK7ILS0S/CERTIFICATE_LANDING_PAGE~T7IBUK7ILS0S.jpeg",
    link: "https://www.coursera.org/account/accomplishments/verify/T7IBUK7ILS0S",
  },
  {
    id: 5,
    title: "Java Training Crash Course for Java Beginners",
    provider: "Udemy",
    status: "Completed",
    description:
      "I've gained a solid foundation in Java programming, which is a major step toward enhancing my skills in software development. This course has helped me understand the essentials, and I’m eager to apply my knowledge to future projects.",
    image:
      "https://media.licdn.com/dms/image/v2/D562DAQEW3QuxjMnavQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1725957909012?e=1766559600&v=beta&t=iGQC0eKQY2_hVOJYZnJoZHIdRZZKJYhXsLhAMBgRLPo",
    link: "",
  }
];

/* ===================== COMPONENT ===================== */
function Certifications() {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  /* DRAG STATE */
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  /* DETECT MOBILE */
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  /* AUTO SCROLL (DESKTOP ONLY) */
  useEffect(() => {
    if (isMobile) return;

    const container = scrollRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      if (isHovered || isDragging.current) return;

      container.scrollLeft += 0.4;

      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }
    }, 16);

    return () => clearInterval(interval);
  }, [isHovered, isMobile]);

  /* DRAG HANDLERS (MOUSE + TOUCH) */
  const startDrag = (x) => {
    isDragging.current = true;
    startX.current = x;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  const moveDrag = (x) => {
    if (!isDragging.current) return;
    const walk = (x - startX.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const stopDrag = () => {
    isDragging.current = false;
    setIsHovered(false);
  };

  return (
    <section className="w-full md:py-10 overflow-hidden" id="certifications">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Certifications & Learning
          </h2>
          <p className="mt-4 text-gray-500 text-base md:text-lg">
            A collection of my professional certifications and learning
            experiences that shaped my skills.
          </p>
        </div>

    
        {/* SCROLL CONTAINER */}
        <div
          ref={scrollRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={stopDrag}
          onMouseDown={(e) => startDrag(e.pageX)}
          onMouseMove={(e) => moveDrag(e.pageX)}
          onMouseUp={stopDrag}
          onTouchStart={(e) => startDrag(e.touches[0].pageX)}
          onTouchMove={(e) => moveDrag(e.touches[0].pageX)}
          onTouchEnd={stopDrag}
          className="mt-10 flex gap-6 md:gap-8 overflow-x-hidden
                     cursor-grab active:cursor-grabbing select-none"
        >
          {[...certifications, ...certifications].map((cert, index) => (
            <div
              key={index}
              className="
                min-w-[260px]
                sm:min-w-[300px]
                md:min-w-[320px]
                bg-white rounded-3xl shadow-md
                border border-gray-100 overflow-hidden
                hover:shadow-xl transition-all duration-500
              "
            >
              {/* IMAGE */}
              <div className="relative h-44 md:h-48 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover
                             transition-transform duration-500
                             hover:scale-110"
                />

                {/* STATUS BADGE */}
                <span
                  className={`absolute top-3 left-3 px-3 py-1 text-xs
                    rounded-full font-medium
                    ${
                      cert.status === "Completed"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                >
                  {cert.status}
                </span>
              </div>

              {/* CONTENT */}
              <div className="p-5 md:p-6">
                <p className="text-xs md:text-sm text-gray-500">
                  {cert.provider}
                </p>

                <h4 className="mt-1 text-base md:text-lg font-semibold text-gray-900">
                  {cert.title}
                </h4>

                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  {cert.description}
                </p>

                <a
                  href={cert.link}
                  className="mt-4 inline-flex items-center gap-2
                             text-sm font-semibold text-orange-600
                             hover:underline"
                >
                  View Details ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
