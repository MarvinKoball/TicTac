import React from 'react';
import { useState } from 'react';

/**
 *  Wenn geklickt, soll server angesprochen werden und nach bild gefragt werden
 *  wenn bild geladen, dann nochmal umwandeln
 *  und dann bild anzeigen. 
*/

const Button = ({ apiURL }) => {
    function machMalWas (apiURL) {
        fetch(apiURL)
        .then((res) => { return res.text()})
        .then(data=>{
            setData("data:image/png;base64," + data)
            console.log(imageData)
        })
        .catch((err) => console.log(err))
       //.then((res)=>console.log(res)) /** hier kommt der lange string von der antwort des backends */
    }

    const [imageData, setData] = useState("data:image/png;base64,")
    //console.log(imageData[0])
    return (
        <div>
        <button type="button" onClick={machMalWas(apiURL)}>
          Button
        </button>
        <img src={imageData}/>
        </div>
    );
}


export default Button;