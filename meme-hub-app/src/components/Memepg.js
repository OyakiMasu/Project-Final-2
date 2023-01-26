import React, { useEffect, useState } from "react";


function Memepg() {
  const [memes, setMemes] = useState([]);
   
  
    useEffect(() => {
      fetch("https://imgflip.com/api")
      .then((response) => response.json())
      .then((data) => {
        setMemes(data.meme);
      });
  }, []);

  return <div>{memes.map((meme) => meme.name)}</div>;
  }

  export default Memepg;