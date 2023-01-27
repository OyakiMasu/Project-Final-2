import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

function Memepg() {
  const [memes, setMemes] = useState([{}]);
  const [randomNumber, setRandomNumber] = useState(0);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) => setMemes(data.data.memes));
  }, []);
  //  console.log(memes)

  // const DisplayMemes = memes.map((meme, index) => {
  //     return (

  //         <div key={index} className="meme-container" >
  //         <img src={meme.url} alt="memepic"></img>
  //         <h6>{meme.name}</h6>

  //         </div>
  //     )
  // })

  function handleClick(event) {
    const newRandomNumber = Math.floor(Math.random() * 100);
    setRandomNumber(newRandomNumber);
    // console.log(randomNumber)
  }

  // const randomNumber = Math.floor(Math.random() *100)
  // console.log(randomNumber)

  // console.log(memes)
  const randomMeme = memes[randomNumber];
  // console.log(randomMeme)

  return (
    <div id="MemePg">
      <Navbar />

      <div className="meme-container">
        <img src={randomMeme.url} alt="memepic"></img>
        <h6>{randomMeme.name}</h6>
        <button onClick={handleClick}>Generate Random Meme</button>
      </div>
    </div>
  );
}
export default Memepg;
