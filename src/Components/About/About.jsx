import React from 'react';
import Typewriter from "typewriter-effect";
import resumeFile from "../../assets/resume.pdf";
import Tilt from "react-parallax-tilt";
import ProfileImage from "../../assets/pic-removebg-preview.png"

const About = () => {
  return (
   <section id='about' className='py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32'>

    <div className='flex flex-col-reverse md:flex-row justify-between items-center '>
      {/* left side */}
      <div className='md:w-1/2 text-center md:text-left mt-8 md:mt-0'>
      {/* greeting */}
      <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight'>
        Hi, I am
      </h1>
      {/* name */}
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Sagnik Mondal
          </h2>
          {/* Skills heading with typing effect */}
          <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight flex items-center gap-2'>
            <span className='text-white'>I am a</span>

            <span className='text-[#4ed19c]'>
              <Typewriter
                options={{
                  strings: ['Coder', 'Fullstack Developer', 'UI/UX Designer'],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 60,
                  pauseFor: 2000,
                }}
              />
            </span>
          </h3>
          {/* About me paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I am a Fullstack Developer skilled in both frontend and backend development. My expertise lies in the MERN stack along with other modern technologies, allowing me to build responsive interfaces, seamless user experiences, and high-performance web solutions.
          </p>
          {/* Resume Button */}
          <a href={resumeFile} 
          download="Sagnik-Mondal-Resume.pdf" target='_blank' rel="noopener noreferrer" className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #4ed19c)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}>DOWNLOAD CV</a>
      </div>

      {/* right side */}
            <div className="md:w-1/2 flex justify-center md:justify-end">
             <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-[rgb(78,209,156)] rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={ProfileImage}
              alt="Tarun Kaushik"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(78,209,156,0.5)]"
            />
          </Tilt>
            </div>
    </div>

   </section>
  )
}

export default About
