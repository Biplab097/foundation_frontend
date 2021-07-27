import React from 'react'
// import { FormControl,Form,NavDropdown,Nav,Button, Navbar } from 'react-bootstrap'
import "./Styles/Navbar.css";
<<<<<<< HEAD
import image from "./Images/logo.png";
=======
import image from "D:/GitHub/foundation_frontend/src/Components/Images/logo.png";
>>>>>>> 4af3b0737f6927efa51421f873aa641b958a1bc2

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
  </div>
    )
}

export default NavBar