import React from 'react';
import HeroImage from "../../assets/pic-removebg-preview.png";
import "./Hero.css";
import CV from "../../assets/resume sagnik mondal.pdf";

const Hero = () => {
  return (
    <section>
       <div className='hero-section flex wrapper'>
        <div className="hero-content">
            <span className='sub-text'>Hello there !</span>
            <h1>
            <span className='green-text'>I'm Sagnik,</span>
           <br/> Mernstack Web Developer
            </h1>
            <p className='para'>
            I’m a B.Tech student in Information Technology and a passionate MERN Stack Developer. I focus on building efficient, user-friendly web applications with clean and modern design.
            </p>
            <div className='flex gap-2'>
                <a href="#" className='btn'>View My works</a>
                 <a href={CV} download="My CV" className='btn border-btn'>Download CV</a>
            </div>

        </div>



        <div className="hero-image">
            <img src={ HeroImage}/>
        </div>
       </div>
    </section>
  )
}

export default Hero
