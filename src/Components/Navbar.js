import React from 'react'
// import { FormControl,Form,NavDropdown,Nav,Button, Navbar } from 'react-bootstrap'
import Display from './Display'
import "./Styles/Navbar.css";
import image from "./Images/logo.png";

// import logo from "./Hexagon.png"

function NavBar() {
    return (
  <div className="navbar">
    <div class="topnav">
      <a class="active" href="#home">Home</a>
      <input class="search"
            type="text"
            id="header-search"
            placeholder="Search Products"
            name="s" 
        />
        <img src={image} class="imagestyle"/>
     
    </div>
    <Display/>
  </div>
    )
}

export default NavBar