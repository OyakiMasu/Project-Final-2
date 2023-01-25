import React from "react";
import Navbar from "./Navbar";
import Login from "./Login";
import Memepg from "./Memepg";

function Home(){
    
    return (
<div className="home-container">

 <h1>Meme Hub</h1>

  <Navbar/>
  
    <div className="meme-body" id="home">
     
    <p> 

    <strong>Have you ever been bored and the only thing that you wanted to do was view memes well this page is all about that.</strong> 

    </p>
    <p>  <img src="meme1.jpg" alt="water meme"/>  </p>

     <p> <img src="meme2.webp" alt="plane-meme"/> </p>  

     <p> <img src="meme4.jpg" alt="-harrypotter-meme"/> </p>     

  </div>
  <Login/>
  <Memepg/>
   </div>

    )
}

export default Home