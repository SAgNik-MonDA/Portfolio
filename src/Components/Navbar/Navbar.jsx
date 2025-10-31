import React, { useState } from 'react';
import "./Navbar.css";
import { FiSun } from "react-icons/fi";
import { FaBarsStaggered,FaXmark} from "react-icons/fa6";


const Navbar = () => {
    const[isMenuActive,setIsMenuActive]=useState(false);
    const toggleMenu =() =>{
        setIsMenuActive(!isMenuActive);
    }


  return (
    <header>
        <nav className='flex between wrapper navbar'>
          <a href="#" className='logo'>
            <span>S</span> agnik.
          </a>

          {/* Dekstop Menu */}
          <ul className='flex gap-2 desktop-menu'>
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

        <div className='flex gap-2 nav-action'>
            <a href="#" className='icon-container border-inverse'>
                <FiSun />

            </a>
          
                <a href="#" className='btn'>Let's Talk</a>
          
                <a href="#" className='hamburger' onClick={toggleMenu}>
                   { isMenuActive?<FaXmark />:<FaBarsStaggered />}
                    </a>
      
            </div>

            {/* Mobile Menu */}
             <ul className={`mobile-menu ${isMenuActive ? "mobile-menu-active":null}`}>
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

            <li> <a href="#" className='btn'>Let's Talk</a></li>
        </ul>

        </nav>
    </header>
  )
}

export default Navbar
