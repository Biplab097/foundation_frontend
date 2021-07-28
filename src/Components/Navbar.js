import React from 'react'
// import { FormControl,Form,NavDropdown,Nav,Button, Navbar } from 'react-bootstrap'
import "./Styles/Navbar.css";
import image from "D:/GitHub/foundation_frontend/src/Components/Images/logo.png";

// import logo from "./Hexagon.png"

function NavBar() {
    return (
  <div className="navbar">
    <div class="topnav">
      <a class="active" href="#home">Home</a>
      <input type="text" id="search" class="search" placeholder="Search Products"/>
        <img src={image} class="imagestyle"/>
     
    </div>
  </div>
    )
}

export default NavBar