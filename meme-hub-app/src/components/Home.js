import React from "react";
import Navbar from "./Navbar";
import images from "../images/meme1.jpg";
import image2 from "../images/meme2.webp";
import images3 from "../images/meme4.jpg";

function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <h1 className="heading-1">Meme Hub</h1>

      <div className="meme-body" id="home">
        <p>
          <strong id="toptext">
          
            Welcome to the Meme Page Generator !!!!!!!!!!
          </strong>
        </p>

        <h2 className="heading-2"> Intro </h2>

        <p>
          {" "}
          This is a meme page app which will help you make your day . You will
          be able to make you're family and friends laugh with this app . This
          page does wonders it may even help you get you're first girlfriend !
          If you think I am lying stick aroud and find out .
        </p>

        <div className="pic">
          <img src={images} alt="water meme" />
          <img src={image2} alt="plane-meme" />
          <img src={images3} alt="-harrypotter-meme" />
        </div>

        <p>Explore this page by clicking into the Memepg </p>
      </div>
    </div>
  );
}

export default Home;
