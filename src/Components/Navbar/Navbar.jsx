import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll and change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  return (
    // <nav
    //   className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
    //     isScrolled
    //       ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md"
    //       : "bg-transparent"
    //   }`}
    // >
    //   <div className="text-white py-2 flex justify-between items-center">

    <nav
      className={`fixed top-0 left-0 w-full z-50 h-16 flex items-center 
  transition duration-300 
  px-4 sm:px-8 md:px-[1vw] lg:px-[20vw] 
  ${isScrolled
          ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md"
          : "bg-transparent"
        }`}
    >
      <div className="text-white flex justify-between items-center w-full">

        {/* Logo */}
        <div className="text-lg font-semibold cursor-pointer">
          <span className="text-[#4ed19c]">&lt;</span>
          <span className="text-white">Sagnik</span>
          <span className="text-[#4ed19c]">/</span>
          <span className="text-white">Mondal</span>
          <span className="text-[#4ed19c]">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-300">
          {menuItems.map((item) => (
            <li
              className={`cursor-pointer hover:text-[#4ed19c] ${activeSection === item.id ? "text-gray-300" : ""
                }`}
            >
   


              <button onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/SAgNik-MonDA"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#4ed19c]"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/sagnik-mondal-118b08311"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#4ed19c]"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#ab0c0c] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#4ed19c] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#1b3420] bg-opacity-90 backdrop-filter backdrop-blur-lg z-50 rounded-lg  md:hidden border border-[#4ed19c] shadow-[0_0_20px_5px_rgba(78,209,156,0.3)]">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
            {menuItems.map((item) => (
              <li
              className={`cursor-pointer hover:text-[#4ed19c] ${activeSection === item.id ? "text-gray-300" : ""
                }`}
            >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
            <div className="flex space-x-4">
              <a
                href="https://github.com/SAgNik-MonDA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#4ed19c]"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/sagnik-mondal-118b08311"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#4ed19c]"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
