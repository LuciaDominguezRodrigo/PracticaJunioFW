/*constantes*/



const platos_carga = 5;  /*será la constante con la que carguemos los platos, en caso de que se quieran 
                           +- platos, sería cambiar la constante y ya está*/

let contador = 1;

async function cargarMas() {
  
    const from = (contador + 1) * platos_carga;
    const to = from + platos_carga;
  
  
      const response = await fetch(`/nuevosPlatos?from=${from}&to=${to}`); //se "recogen" los nuevos platos del mapa
      const platoNuevo = await response.text();
      const estructuraPlatos = document.getElementById("estructuraPlatos");  //se recoge del index su estructura
      //console.log(estructuraPlatos)
      estructuraPlatos.innerHTML += platoNuevo; //los platos nuevos se meten ahí
      contador++; //se incrementa el contador para que la acción se vaya repitiendo hasta que se acaben los platos*/
      } 

      function mensajeBorrado() {
        cambiarVisibilidad(document.getElementById("noElementos"));
    }
  
