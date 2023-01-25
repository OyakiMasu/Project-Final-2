import React from "react";
import {NavLink} from "react-router-dom"


function Navbar(){
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <h3 className="navbar-brand">MEME HUB</h3>

            <NavLink to="/">HOME</NavLink> 
            <NavLink to="/login">MEME PAGE</NavLink> 

            {/*<a href ="">HOME</a>
           <a href ="">MEME PAGE</a>*/}
          </div>
        </nav>
    )
}


export default Navbar
