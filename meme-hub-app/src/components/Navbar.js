import React from "react";
import { NavLink } from "react-router-dom";
import images4 from "../images/meme-hub-logo.png";

function Navbar(){
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            {/* <p className="navbar-text">MEME HUB</p> */}
            <img src={images4} alt="logo2" className="sidelogo"></img>

            <NavLink to="/" className="nav-bar-link">HOME</NavLink> 
            <NavLink to="/login" className="nav-bar-link">MEME PAGE</NavLink> 

            {/*<a href ="">HOME</a>
           <a href ="">MEME PAGE</a>*/}
      </div>
    </nav>
  );
}

export default Navbar;
