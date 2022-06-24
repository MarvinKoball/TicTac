import React from 'react';


/**
 *  Wenn geklickt, soll server angesprochen werden und nach bild gefragt werden
 *  wenn bild geladen, dann nochmal umwandeln
 *  und dann bild anzeigen. 
*/

function machMalWas (apiURL) {
    alert(apiURL)
}

const Button = ({ apiURL }) => (
    <button type="button" onClick={machMalWas(apiURL)}>
      Button
    </button>
);

export default Button;