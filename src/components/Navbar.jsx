import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {

  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar__logo">
        <img className='logo' src="/INFYAIR_Logo.svg" alt="Logo"/>
        <img className='logo-title' src="/INFYAIR_text.svg" alt="INFYAIR" />
      </NavLink>
      <div className="navbar__links">
        <NavLink to="/" className="navbar__link" activeclassame="active-nav-link" >Home</NavLink>
        <NavLink to="/about" className="navbar__link" activeclassname="active-nav-link" >About</NavLink>
        <NavLink to="/services" className="navbar__link" activeclassname="active-nav-link" >Services</NavLink>
        <NavLink to="/technology" className="navbar__link" activeclassname="active-nav-link" >Technology</NavLink>
        <NavLink to="/projects" className="navbar__link" activeclassname="active-nav-link" >Projects</NavLink>
        <NavLink to="/careers" className="navbar__link" activeclassname="active-nav-link" >Careers</NavLink>
      </div>
      <NavLink to="/contact" ><button className="navbar__btn">Contact</button></NavLink>
    </nav>
  );
};

export default Navbar;