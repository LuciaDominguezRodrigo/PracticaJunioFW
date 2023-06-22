import { Plato } from './platosPredeterminados.js';


//Funciones con mapa plat
const plat = new Map();
export let nextId = 0;
loadSampleData();
let plato_id = plat.get(2);
//console.log(plato_id);

export function mostrarTodosPlatos(){
   for(let i=0; i<plat.size; i++){
      plat.get(i);
   }
}


export function getRangoPlato(from, to) {
   let numPlatos = [...plat.values()]; //coge los valores que haya en el mapa y los mete en un array
   if (from !== undefined) { //mienstras no me tenga que devolver todos los elementos...
      //console.log(numPlatos)
      return numPlatos.slice(from, to); //devuelveme los platos que te he pedido
   } else {
      return numPlatos; //devuélveme todos los platos que tengas
   }
}



export function getPlat(id) {  //PROBLEMA: EL ID QUE LE LLEGA DESDE EL ROUTER ES UNDEFINED
   return plat.get(id);
}


export function borrarPlat(id) {
   plat.delete(id)
}

export function addPlato(nombre, descripcion, precio, valoracion, ingredientes, imagen) {                             //funcion para añadir la nota al mapa junto con el id
   let plato = new Plato(nombre, descripcion, precio, valoracion, ingredientes, imagen, nextId);
   plat.set(nextId, plato);
   nextId = nextId + 1;
}


export function modificarPlato(nombre, desc, precio, valoracion, ingredientes, imagen, id){ 
   let plato = new Plato();
   plato = plat.get(parseInt(id));
   //console.log(plato);
   plato.nombre = nombre;
   plato.descripcion = desc;
   plato.precio = precio;
   plato.valoracion = valoracion;
   plato.ingredientes = ingredientes;
   plato.imagen = imagen;
}


export function loadSampleData() {
   addPlato('Albondigas', 'Deliciosas bolas de carne', 15, 10.0, ['Carne de vacuno triturada', 'Huevos', 'Harina', '3 dientes de ajo ', '1 cebolla'], '../imagenes/Albondigas.jpeg');

   addPlato('Guisantes con jamón', 'Guisantes nacionales con delicisos taquitos de jamoncito', 20, 9.0, ['Guisantes', 'Taquitos de Jamon', 'Surtido de pimientas'], '../imagenes/Guisantes.jpeg');

   addPlato('Paella de marisco', 'Sabrosa paella con marisco fresco', 25, 9.0, ['Arroz bomba', 'marisco fresco', 'sofrito de cebolla y pimineto', 'toque de pimentón'], '../imagenes/Paella.jpeg');

   addPlato('Cocidito madrileño', 'Tradicional cocido madrileño', 10, 9.5, ['Garbanzos', 'carne', 'chorizo'], '../imagenes/Cocido.jpeg');

   addPlato('Macarrones con chorizo', 'Macarrones con chorizo al estilo casero', 8, 8.9, ['Chorizo', 'Ajo en polvo', 'Cebolla frita', 'Comino', 'Pimentón', 'Vino blanco', 'Agua', 'Macarrones'], '../imagenes/macarrones.jpg');

   addPlato('Tortilla de patatas', 'La española', 11, 7.5, ['Patatas', 'Huevos', 'Sal'], '../imagenes/tortilla.jpg');

   addPlato('Pizza', 'Mejor que la de Italia', 17, 6.0, ['Harina', 'Huevos', 'Salsa de tomate', 'Carne de vacuno', 'Bacon'], '../imagenes/pizza.jpg');

   addPlato('Lubina', 'Al horno y con mucho sabor', 9, 7.75, ['Lubina', 'Cebolla', '3 dientes de ajo', 'Agua', 'Limon'], '../imagenes/lubina.jpg');

   addPlato('Patatas bravas', 'Un plato que nunca defrauda', 8, 8.0, ['Patatas', 'Salsa brava', 'Toque de sal', 'Perejil'], '../imagenes/patatasBravas.jpeg');

   addPlato('Tarta de Santiago', 'Postre gallego por excelencia', 6, 5.5, ['Azucar', 'Raladura de limon', 'Almendra picada', '3 huevos', '2 cucharadas de mantequilla', 'harina'], '../imagenes/tartaSantiago.jpeg');

   addPlato('Gambas al ajillo', 'Puedes elegir cuan picantes te gustan', 13, 7.6, ['Gambas', 'Guindillas', 'perejil', '3 dientes de ajo'], '../imagenes/gambasAjillo.jpg');

   addPlato('Cafe', 'Perfecto para despues de comer', 1, 9.5, ['Cacao', 'Agua', 'Azucar'], '../imagenes/cafe.jpg');

}




