import React from "react";
import Navbar from "./Navbar";
import Login from "./Login";
import Memepg from "./Memepg";
import images from "../images/meme1.jpg"
import image2 from "../images/meme2.webp"
import images3 from "../images/meme4.jpg"

function Home(){
    
   return (
<div className="home-container">
   <h1>Meme Hub</h1>

   <Navbar/>
    <div className="meme-body" id="home"> 
    <p> 
    <strong id="toptext"> Welcome to the Meme Page Generator !!!!!!!!!! </strong>

    <h2> Intro </h2>
    <p> This is a meme page app which will help you make your day .
        You will be able to make you family and friends with this app .
        This page does wonders it may even help you get you're first girlfriend !
        If you think I am lying stick aroud and find out . 
        
    </p>

    </p>

    <div className="pic">
     <img src={images} alt="water meme"/>
     <img src={image2} alt="plane-meme"/>
     <img src={images3} alt="-harrypotter-meme"/>
    </div>

    <p>Explore this page by clicking into the Memepg </p>

  </div>
   <Login/>
   <Memepg/>
   </div>

    )
}

export default Home