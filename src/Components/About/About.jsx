import React from "react";
import Typewriter from "typewriter-effect";
import resumeFile from "../../assets/resume.pdf";
import Tilt from "react-parallax-tilt";
import ProfileImage from "../../assets/pic-removebg-preview.png";

const About = () => {
  return (
    // <section
    //   id="about"
    //   className="pt-40 pb-44 px-0 sm:px-2 md:px-4 lg:px-20 w-full max-w-full lg:max-w-7xl mx-auto font-sans"
    // >
<section
  id="about"
  className="
    min-h-screen               /* full height for all screens */
    
    pt-28 sm:pt-24 md:pt-28 lg:pt-32  /* top spacing based on screen size */
    
    pb-16 sm:pb-16 md:pb-36 lg:pb-40  /* bottom spacing: removes extra gap */
    
    px-4 sm:px-6 md:px-10
        
    w-full max-w-full lg:max-w-7xl mx-auto font-sans
  "
>




      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
        
        {/* Text Content */}
        <div className="flex-1 min-w-0 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5">
            Hi, I am
          </h1>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4">
            Sagnik Mondal
          </h2>

          {/* <h3 className="mb-8 text-[#8245ec] font-semibold flex items-center justify-center md:justify-start mt-10 text-3xl">
            <span className="text-white mr-2">I am a</span>
            <span className="text-[#4ed19c]">
              <Typewriter
                options={{
                  strings: ["Coder", "Fullstack Developer", "UI/UX Designer"],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 60,
                  pauseFor: 2000,
                }}
              />
            </span>
          </h3> */}



<h3
  className="
    mb-5 sm:mb-10  
    text-[#8245ec] font-semibold
    mt-8 
    text-2xl sm:text-4xl md:text-5xl
    py-1
    text-center md:text-left
  "
>
  <span className="text-white mr-2 inline-block">I am a</span>
  <span className="text-[#4ed19c] inline-block">
    <Typewriter
      options={{
        strings: ["Coder", "Fullstack Developer", "UI/UX Designer"],
        autoStart: true,
        loop: true,
        delay: 50,
        deleteSpeed: 60,
        pauseFor: 2000,
      }}
    />
  </span>
</h3>












 <p
  className="
    text-sm sm:text-base md:text-lg text-gray-300
    mb-10 sm:mb-5
    leading-relaxed max-w-xl mx-auto md:mx-0
    py-1 sm:py-0
  "
>

            I am a Fullstack Developer skilled in both frontend and backend
            development. My expertise lies in the MERN stack and modern frontend
            tools, allowing me to build responsive interfaces, seamless user
            experiences, and high-performance web solutions.
          </p>

          {/* <div className="flex justify-center md:justify-start mt-5"> */}
          {/* <div className="flex justify-center md:justify-start mt-6 sm:mt-16 md:mt-2"> */}
          <div className="flex justify-center md:justify-start mt-16 sm:mt-20 md:mt-8">

            <a
              href={resumeFile}
              download="Sagnik-Mondal-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-3 text-base sm:text-lg font-semibold rounded-full transition-transform hover:scale-105"
              style={{
                background: "linear-gradient(90deg,#8245ec,#4ed19c)",
                boxShadow: "0 6px 18px rgba(130,69,236,0.18)",
                color: "white",
              }}
            >
              DOWNLOAD CV
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="flex-none w-36 sm:w-48 md:w-80 lg:w-96 flex justify-center md:justify-end">
          <Tilt
            tiltMaxAngleX={18}
            tiltMaxAngleY={18}
            perspective={1000}
            scale={1.03}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <div className="border-2 md:border-4 overflow-hidden w-36 h-36 sm:w-48 sm:h-48 md:w-80 md:h-80 lg:w-96 lg:h-96 flex items-center justify-center border-[rgb(78,209,156)] rounded-full">
              <img
                src={ProfileImage}
                alt="Sagnik Mondal"
                className="w-full h-full object-cover rounded-full"
                draggable={false}
              />
            </div>
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
