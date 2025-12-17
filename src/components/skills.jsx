import { useState } from "react";
import reactIcon from "../assets/skills/react.svg";
import nextJsIcon from "../assets/skills/nextjs.svg";
import jsIcon from "../assets/skills/js.svg";
import tsIcon from "../assets/skills/ts.svg";
import htmlIcon from "../assets/skills/html.svg";
import cssIcon from "../assets/skills/css.svg";
import tailwindIcon from "../assets/skills/tailwind.svg";
import bootstrapIcon from "../assets/skills/bootstrap.svg";

import springIcon from "../assets/skills/spring.svg";
import dotnetIcon from "../assets/skills/dotnet.svg";
import expressIcon from "../assets/skills/dotnet.svg";
import phpIcon from "../assets/skills/php.svg";

import mongoIcon from "../assets/skills/mongodb.svg";
import postgresIcon from "../assets/skills/postgresql.svg";
import mysqlIcon from "../assets/skills/mysql.svg";
import sqliteIcon from "../assets/skills/sqlite.svg";

import figmaIcon from "../assets/skills/figma.svg";
import illustratorIcon from "../assets/skills/ai.svg";
import photoshopIcon from "../assets/skills/ps.svg";
import canvaIcon from "../assets/skills/canva.svg";

import gitIcon from "../assets/skills/git.svg";
import dockerIcon from "../assets/skills/docker.svg";
import vscodeIcon from "../assets/skills/vscode.svg";
import intellijIcon from "../assets/skills/intellij.svg";
import netbeansIcon from "../assets/skills/netbeans.png";

import javaIcon from "../assets/skills/java.svg";
import pythonIcon from "../assets/skills/python.svg";
import csharpIcon from "../assets/skills/csharp.png";
import flutterIcon from "../assets/skills/flutter.svg";

export const skills = [
  // Frontend
  { name: "React", category: "Frontend", icon: reactIcon },
  { name: "Next.js", category: "Frontend", icon: nextJsIcon },
  { name: "HTML5", category: "Frontend", icon: htmlIcon },
  { name: "CSS3", category: "Frontend", icon: cssIcon },
  { name: "Tailwind CSS", category: "Frontend", icon: tailwindIcon },
  { name: "Bootstrap", category: "Frontend", icon: bootstrapIcon },

  // Languages
  { name: "JavaScript", category: "Languages", icon: jsIcon },
  { name: "TypeScript", category: "Languages", icon: tsIcon },
  { name: "Java", category: "Languages", icon: javaIcon },
  { name: "Python", category: "Languages", icon: pythonIcon },
  { name: "C#", category: "Languages", icon: csharpIcon },
  { name: "Dart", category: "Languages", icon: flutterIcon },

  // Backend
  { name: "Spring Boot", category: "Backend", icon: springIcon },
  { name: "ASP.NET", category: "Backend", icon: dotnetIcon },
  { name: "Express.js", category: "Backend", icon: expressIcon },
  { name: "PHP", category: "Backend", icon: phpIcon },

  // Databases
  { name: "MongoDB", category: "Backend", icon: mongoIcon },
  { name: "PostgreSQL", category: "Backend", icon: postgresIcon },
  { name: "MySQL", category: "Backend", icon: mysqlIcon },
  { name: "SQLite", category: "Backend", icon: sqliteIcon },

  // Design
  { name: "Figma", category: "Design", icon: figmaIcon },
  { name: "Adobe Illustrator", category: "Design", icon: illustratorIcon },
  { name: "Adobe Photoshop", category: "Design", icon: photoshopIcon },
  { name: "Canva", category: "Design", icon: canvaIcon },

  // Tools
  { name: "Git", category: "Tools", icon: gitIcon },
  { name: "Docker", category: "Tools", icon: dockerIcon },
  { name: "VS Code", category: "Tools", icon: vscodeIcon },
  { name: "IntelliJ IDEA", category: "Tools", icon: intellijIcon },
  { name: "NetBeans", category: "Tools", icon: netbeansIcon },
];

const categories = [
  "All Skills",
  "Frontend",
  "Backend",
  "Design",
  "Tools",
  "Languages",
];

export default function Skills() {
  const [active, setActive] = useState("All Skills");

  const filteredSkills =
    active === "All Skills"
      ? skills
      : skills.filter((skill) => skill.category === active);

  return (
    <section id="skills" className="mt-32 px-6">
      {/* Header */}
      <div className="max-w-3xl mb-12">
        <h2 className="text-4xl font-semibold text-black">Tech Stack</h2>
        <p className="mt-4 text-gray-600">
         A curated set of technologies and tools powering my development workflow.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap  gap-3 mb-14">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition
              ${
                active === cat
                  ? "bg-orange-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div
        className="max-w-7xl mx-auto grid gap-6
        grid-cols-2 md:grid-cols-4 lg:grid-cols-8"
      >
        {filteredSkills.map((skill) => (
          <div
            key={skill.name}
            className="rounded-2xl p-3 text-center
            bg-white/40 backdrop-blur-xl
            border border-white/40
            shadow-[0_8px_30px_rgba(0,0,0,0.15)]
            hover:shadow-[0_12px_40px_rgba(0,0,0,0.25)]
            transition"
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-12 h-12 mx-auto mb-2"
            />
            <p className="text-sm font-medium text-gray-800">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
