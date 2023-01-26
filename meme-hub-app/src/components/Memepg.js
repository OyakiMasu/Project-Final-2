import React, { useEffect, useState } from "react";

function Memepg() {
  let [memes, setMeme] = useState([])
   
  
    useEffect(() => {
      fetch("https://imgflip.com/api")
        .then((resp) => resp.json())
        .then(data => setMeme(data));
            
          },
         
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.id}>
              {item.name} {item.image}
            </li>
          ))}
        </ul>
      );
    }
  }

  export default Memepg