import React, { useEffect, useState } from "react";

function Memepg(){

     const [memes, setMemes] = useState([{}])

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(data => setMemes(data.data.memes))
     }, [])
    //  console.log(memes)

    const DisplayMemes = memes.map((meme, index) => {
        return (
            <div key={index} className="meme-container" >
             <img src={meme.url} alt="memepic"></img>
             <h6>{meme.name}</h6>   

            </div>
        )
    })
        

    
    return (
        <div id="MemePg">

            {DisplayMemes}
            
        </div>
    )
}
export default Memepg
