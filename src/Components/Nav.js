import React from 'react'
import Navigation from './Navigation'
import { useState} from 'react';
import Hamburger from "../assets/hamburger.png";
import Close from "../assets/close.png";



const Nav = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  function handleToggle() {
    setNavbarOpen(!navbarOpen);
  }
  return (
    <nav>
      <nav className="burger">
        <img
          src={require("../assets/Logo.svg")}
          alt="Little Lemon logo"
          className="nav-image"
        ></img>

        <button className="burger-icon" onClick={handleToggle}>
        <img src={navbarOpen ? Close : Hamburger} alt="Navigation Bar" />
        </button>
      </nav>
      <Navigation device="desktop" />
      {navbarOpen ? <Navigation device="mobile" /> : ""}
    </nav>
  )
}

export default Nav
