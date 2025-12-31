import React from "react";
import { SkillsInfo } from "../../Constrants.js";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="relative -mt-24 pt-12 pb-16 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom bg-black"
  >
    {/* Section Title */}
    <div className="text-center mb-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
      <p className="text-gray-400 mt-4 text-lg font-semibold">
        A set of technical skills developed through projects and practical experience.
      </p>
    </div>

    {/* Skill Categories */}
   <div className="flex flex-wrap gap-4 py-6 justify-between">
  {SkillsInfo.map((category) => (
    <div
      key={category.title}
      className="
        bg-gray-900 backdrop-blur-md
        px-6 py-8
        w-full sm:w-[48%]
        md:min-h-[420px] md:flex md:flex-col   /* ✅ md equal height */
        rounded-2xl
        border-2 border-[rgb(78,209,156)]
        shadow-[0_0_20px_5px_rgba(78,209,156,0.3)]
      "
    >
      {/* Title */}
      <h3 className="text-2xl md:text-3xl font-semibold text-gray-400 mb-6 text-center">
        {category.title}
      </h3>

      {/* Skills */}
      <Tilt
        tiltMaxAngleX={20}
        tiltMaxAngleY={20}
        perspective={1000}
        scale={1.05}
        transitionSpeed={1000}
        gyroscope={true}
      >
        <div
          className="
            grid
            grid-cols-[repeat(auto-fit,minmax(120px,1fr))]  /* ✅ md responsive grid */
            gap-4
            w-full
          "
        >
          {category.skills.map((skill) => (
            <div
              key={skill.name}
              className="
                flex items-center justify-center gap-2 min-w-0
                bg-transparent
                border-2 border-gray-700
                rounded-3xl
                py-3 px-3
                text-center
              "
            >
              <img
                src={skill.logo}
                alt={`${skill.name} logo`}
                className="w-6 h-6 md:w-7 md:h-7 flex-shrink-0"
              />
              <span className="text-sm text-gray-300 truncate">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </Tilt>
    </div>
  ))}
</div>

  </section>
);

export default Skills;

