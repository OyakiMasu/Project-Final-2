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

    const [url, setUrl] =useState(null);
      const getRandomMeme = async () => {
         const response =await fetch(URL);
         const body =await response.json();
         return body.url;
      
      };
      
      const onClickHandler =async () => { 
          const url = await getRandomMeme();
      
             setUrl(url);
        };
      
        useEffect(() => {
          onClickHandler();
        }, []);
      
        return (
          <div id ="Memepg">
            <button onClick={onClickHandler}>Click me for a meme</button>
            {DisplayMemes}
            <span>{url}</span>
            <img scr={url} />
          </div>
        );
        

    
    // return (
    //     <div id="MemePg">

    //         {DisplayMemes}
            
    //     </div>
    // )
}
 export default Memepg
// export default Memepg = () => {
//   const [url, setUrl] =useState(null);

//   const onClickHandler = async () => {
// const getRandomMeme = async () => {

// }
//     const url = await getRandomMeme();

//        setUrl(url);
//   };

//   useEffect(() => {
//     onClickHandler();
//   }, []);

//   return (
//     <div>
//       <button onClick={onClickHandler}>Click me for a meme</button>
//       <span>{url}</span>
//       <img scr={url} />
//     </div>
//   );
  //};
  