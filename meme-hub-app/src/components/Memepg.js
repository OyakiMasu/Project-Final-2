import React, { useEffect, useState } from "react";

const API_URL = "https://imgflip.com/api"

function Memepg() {
  const [memes, setMemes] = useState(null)
   
  
    useEffect(() => {
      fetch("https://imgflip.com/api")
        .then(r => r.json())
        .then(data => setMemes(data.memes))
      }, [])
     
      if (!memes){
        return <h2>Loading...</h2>
      }

    return (
      <div>
          <p> Funny</p>
          <img src={memes} alt="Random Meme" />
      </div>
    );
  }

  export default Memepg;