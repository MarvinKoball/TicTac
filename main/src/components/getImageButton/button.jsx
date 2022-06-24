import React from 'react';
import { useState } from 'react';

/**
 *  Wenn geklickt, soll server angesprochen werden und nach bild gefragt werden
 *  wenn bild geladen, dann nochmal umwandeln
 *  und dann bild anzeigen. 
*/

function machMalWas (apiURL) {
    console.log(apiURL)
    fetch(apiURL)
    .then((res) => {
        console.log(res)
    })
    .catch((err) => console.log(err))
    

    
   //.then((res)=>console.log(res)) /** hier kommt der lange string von der antwort des backends */
}



const Button = ({ apiURL }) => {
    const imageData = useState("data:image/png;base64,")
    //console.log(imageData[0])
    return (
        <div>
        <button type="button" onClick={machMalWas(apiURL)}>
          Button
        </button>
        <img src={imageData[0]}/>
        </div>
    );
}


export default Button;