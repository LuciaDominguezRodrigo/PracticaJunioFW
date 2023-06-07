/*constantes*/

import { cambiarVisibilidad } from "./main";

const platos_carga = 5;  /*será la constante con la que carguemos los platos, en caso de que se quieran 
                           +- platos, sería cambiar la constante y ya está*/


let contador = 0;

async function cargarMas() {
    const from = (contador + 1) * platos_carga;
    const to = from + platos_carga;
  
        let tamanioDB = await fetch('/fetch_dataBaseSize'); // se le solicita al servidor el tamaño de la base de datos, en nuestro caso, 
                                                            // que tengamos ya creados
        tamanioDB = await tamanioDB.json();  //esta consulta se devuelve en formato json
        const numeroPlatos = parseInt(tamanioBD); //hacemos que dicha consulta se convierta en un entero, para que podamos compararlo y ejecutar la función
  
     if (numeroPlatos <= from) {
        cambiarVisibilidad(document.getElementById("verMas")); //cuando creemos el indez, al las secciones de cargar más y no elemento se les tendrá que poner dicha ID
        cambiarVisibilidad(document.getElementById("noMasElementos"));
        return;
      } else {
  
      const response = await fetch(`/platos?from=${from}&to=${to}`); //se "recogen" los nuevos platos del mapa
      const platoNuevo = await response.text();
      const estructuraPlatos = document.getElementById("estructuraPlatos");  //se recoge del index su estructura
      estructuraPlatos.innerHTML += platoNuevo; //los platos nuevos se meten ahí
      contador++; //se incrementa el contador para que la acción se vaya repitiendo hasta que se acaben los platos*/
      } 

      function mensajeBorradp() {
        cambiarVisibilidad(document.getElementById("noElementos"));
    }
  }
