import React from 'react';
import Typewriter from "typewriter-effect";

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
          <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight'>
            <span className='text-white'>
              I am a
            </span>
          <Typewriter
              options={{
                strings: ['Coder', 'Fullstack Developer', 'UI/UX Designer'],
                autoStart: true,
                loop: true,
                delay: 60,       // typing speed (ms per character)
                deleteSpeed: 50, // erase speed (ms per character)
                pauseFor: 2000,  // pause after typing a string before deleting
              }}
            />
          </h3>
      </div>
    </div>

   </section>
  )
}

export default About
