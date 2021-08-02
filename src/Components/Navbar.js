import React from 'react'
// import { FormControl,Form,NavDropdown,Nav,Button, Navbar } from 'react-bootstrap'
import "./Styles/Navbar.css";

//import image from "./Images/logo.png";
=======
import image from "./Images/logo.png";

import history  from '../history';

// import logo from "./Hexagon.png"

function NavBar() {
    return (
  <div className="navbar">
    {/* <div class="topnav">
      <div><img src={image} class="imagestyle"/></div>
      <div>
      <a class="menubuttons" href="#Dashborad">Dashboard</a>
      <a class="menubuttons" href="#Course">Course</a>
      <input type="text" id="search" class="search" placeholder="Search Products"/></div>
        
     
    </div> */}
    <table class="table">
      <tr>
        <td class="imagedata">
          <img src={image} class="imagestyle"/>
        </td>
        <td class="buttondata">
          <a class="buttons" href="/Dashboard" onClick={() => history.push('/Dashboard')}>Dashboard</a>
          <a class="buttons" href="/Course"onClick={() => history.push('/Course')}>Course</a>
        </td>
      <td class="searchdata">
        <input type="text" id="search" class="search" placeholder="Search Products"/>
      </td>
      </tr>
    </table>
  </div>
    )
}

export default NavBar