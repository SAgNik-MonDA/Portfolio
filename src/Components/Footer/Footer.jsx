import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube, FaGithub } from "react-icons/fa";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white py-8 px-[5vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        
        {/* Name / Logo */}

        <h2 className="text-xl font-semibold text-purple-500">Sagnik Mondal</h2>

        {/* Navigation Links - Responsive */}
        <nav className="flex flex-wrap justify-center space-x-2 sm:space-x-6 mt-4">
          
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "work" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-500 text-sm sm:text-base my-1"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons - Responsive */}
        <div className="flex flex-wrap justify-center space-x-4 mt-2">
          {[
            { icon: <FaFacebook />, link: "https://www.facebook.com/share/1C9btKtb21/" },
            { icon: <FaTwitter />, link: "https://x.com/SagnikM33675590" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/sagnik-mondal-118b08311?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/sagnik_mondal_12?igsh=d2g0MTZpdnA0ejYw" },
            {icon:<FaGithub />,link:"https://github.com/SAgNik-MonDA"}
            
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-gray-400 mt-6">
          © 2026 Sagnik Mondal. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
