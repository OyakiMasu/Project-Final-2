import React from "react";
import { NavLink } from "react-router-dom";

function Navbar(){
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <p className="navbar-text">MEME HUB</p>

            <NavLink to="/" className="nav-bar-link">HOME</NavLink> 
            <NavLink to="/login" className="nav-bar-link">MEME PAGE</NavLink> 

            {/*<a href ="">HOME</a>
           <a href ="">MEME PAGE</a>*/}
      </div>
    </nav>
  );
}

export default Navbar;
