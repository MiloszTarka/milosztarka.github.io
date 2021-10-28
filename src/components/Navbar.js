import React from "react";
import './Navbar.css';
import {
  NavLink,
} from "react-router-dom";

 
const Navbar = () => {
    return (
      <div className="navbar"> 
          <NavLink to="/"><h1>VOYAGER</h1></NavLink>
          <ul className="navbar-buttons">
              <NavLink to="/"><p>HOME</p></NavLink>
              <NavLink to="/News"><p>NEWS</p></NavLink>
              <NavLink to="/AboutUs"><p>ABOUT US</p></NavLink>
              <NavLink to="/FAQ"><p>FAQ</p></NavLink>
          </ul>
      </div>

    );
  }

export default Navbar;