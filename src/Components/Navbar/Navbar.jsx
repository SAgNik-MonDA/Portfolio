import React from 'react';
import "./Navbar.css";
import { FiSun } from "react-icons/fi";
import { FaBarsStaggered } from "react-icons/fa6";

const Navbar = () => {
  return (
    <header>
        <nav className='flex between wrapper navbar'>
          <a href="#" className='logo'>
            <span>S</span> agnik.
          </a>

          {/* Dekstop Menu */}
          <ul className='flex gap-2'>
            <li>
                <a href="#" className='link'>Home</a>
            </li>
            <li>
                <a href="#" className='link'>About</a>
            </li>
            <li>
                <a href="#" className='link'>Skills</a>
            </li>
            <li>
                <a href="#" className='link'>Projects</a>
            </li> 
        </ul>
            <a href="#" className=''>
                <FiSun />

            </a>
             <li>
                <a href="#" className='link'>Let's Talk</a>
                <a href="#">
                    <FaBarsStaggered />
                    </a>
            </li>
        </nav>
    </header>
  )
}

export default Navbar
