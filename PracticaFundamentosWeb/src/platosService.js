import { cargarInfo, Plato } from './platosPredeterminados.js'

   const p = new Map();
   export let platos = new Map();
   cargarInfo();
   

//Funciones con mapa plat
const plat = new Map();
export let nextId = 0;
loadSampleData();


export function getRangoPlato(from, to) {
   let numPlatos = [...plat.values()]; //coge los valores que haya en el mapa y los mete en un array
   if (from !== undefined) { //mienstras no me tenga que devolver todos los elementos...
      console.log(numPlatos)
      return numPlatos.slice(from, to); //devuelveme los platos que te he pedido
   } else {
       return numPlatos; //devuélveme todos los platos que tengas
   }
}

export function getPlat(id){                                //funcion para devolver la nota pasando por parámetro el id

   let plato_id = plat.get(id);
   let ingred = new Array();
   let ing = [...plato_id.ingredientes];
   
   for (let i = 0; i < ing.length; i++) {
      console.log(ing[i][1])
       ingred[i] = ing[i][1];
   }
   return {nombre: plato_id.nombre, descripcion:plato_id.descripcion, precio:plato_id.precio, valoracion:plato_id.valoracion, ingredientes: ingred, imagen: plato_id.imagen, id:id}
}

export function borrarPlat(id){
   plat.delete(id)
}

export function addPlato(plato) {                             //funcion para añadir la nota al mapa junto con el id
   let id = nextId++;
   plato.id = id.toString();
   plat.set(plato.id, plato);
   
}

export function loadSampleData(){
   addPlato({
      nombre: 'Albondigas',
      descripcion: 'Deliciosas bolas de carne',
      precio: 15,
      valoracion: 10.0,
      ingredientes: new Map([
        [0, 'Carne de vacuno triturada'],
        [1, 'Huevos'],
        [2, 'Harina'],
        [3, '3 dientes de ajo'],
        [4, '1 cebolla']
      ]),
      imagen: '../imagenes/Albondigas.jpeg'
    });
    
    addPlato({
      nombre: 'Guisantes con jamón',
      descripcion: 'Guisantes nacionales con delicisos taquitos de jamoncito',
      precio: 20,
      valoracion: 9.0,
      ingredientes: new Map([
        [0, 'Guisantes'],
        [1, 'Taquitos de Jamon'],
        [2, 'Surtido de pimientas']
      ]),
      imagen: '../imagenes/Guisantes.jpeg'
    });
    
    addPlato({
      nombre: 'Paella de marisco',
      descripcion: 'Sabrosa paella con marisco fresco',
      precio: 25,
      valoracion: 9.0,
      ingredientes: new Map([
        [0, 'Arroz bomba'],
        [1, 'marisco fresco'],
        [2, 'sofrito de cebolla y pimineto'],
        [3, 'toque de pimentón']
      ]),
      imagen: '../imagenes/Paella.jpeg'
    });
    
    addPlato({
      nombre: 'Cocidito madrileño',
      descripcion: 'Tradicional cocido madrileño',
      precio: 10,
      valoracion: 9.5,
      ingredientes: new Map([
        [0, 'Garbanzos'],
        [1, 'carne'],
        [2, 'chorizo']
      ]),
      imagen: '../imagenes/Cocido.jpeg'
    });
    
    addPlato({
      nombre: 'Macarrones con chorizo',
      descripcion: 'Macarrones con chorizo al estilo casero',
      precio: 8,
      valoracion: 8.9,
      ingredientes: new Map([
        [0, 'Chorizo'],
        [1, 'Ajo en polvo'],
        [2, 'Cebolla frita'],
        [3, 'Comino'],
        [4, 'Pimentón'],
        [5, 'Vino blanco'],
        [6, 'Agua'],
        [7, 'Macarrones']
      ]),
      imagen: '../imagenes/macarrones.jpg'
    });
    
    addPlato({
      nombre: 'Tortilla de patatas',
      descripcion: 'La española',
      precio: 11,
      valoracion: 7.5,
      ingredientes: new Map([
        [0, 'Patatas'],
        [1, 'Huevos'],
        [2, 'Sal']
      ]),
      imagen: '../imagenes/tortilla.jpg'
    });
    
    addPlato({
      nombre: 'Pizza',
      descripcion: 'Mejor que la de Italia',
      precio: 17,
      valoracion: 6.0,
      ingredientes: new Map([
        [0, 'Harina'],
        [1, 'Huevos'],
        [2, 'Salsa de tomate'],
        [3, 'Carne de bacuno'],
        [4, 'Bacon']
      ]),
      imagen: '../imagenes/pizza.jpg'
    });
    
    addPlato({
      nombre: 'Lubina',
      descripcion: 'Al horno y con mucho sabor',
      precio: 9,
      valoracion: 7.75,
      ingredientes: new Map([
        [0, 'Lubina'],
        [1, 'Cebolla'],
        [2, '3 dientes de ajo'],
        [3, 'Agua'],
        [4, 'Limon']
      ]),
      imagen: '../imagenes/lubina.jpg'
    });
    
    addPlato({
      nombre: 'Patatas bravas',
      descripcion: 'Un plato que nunca defrauda',
      precio: 8,
      valoracion: 8.0,
      ingredientes: new Map([
        [0, 'Patatas'],
        [1, 'Salsa brava'],
        [2, 'Toque de sal'],
        [3, 'Perejil']
      ]),
      imagen: '../imagenes/patatasBravas.jpeg'
    });
    
    addPlato({
      nombre: 'Tarta de Santiago',
      descripcion: 'Postre gallego por excelencia',
      precio: 6,
      valoracion: 5.5,
      ingredientes: new Map([
        [0, 'Azucar'],
        [1, 'Raladura de limon'],
        [2, 'Almendra picada'],
        [3, '3 huevos'],
        [4, '2 cucharadas de mantequilla'],
        [5, 'harina']
      ]),
      imagen: '../imagenes/tartaSantiago.jpeg'
    });
    
    addPlato({
      nombre: 'Gambas al ajillo',
      descripcion: 'Puedes elegir cuan picantes te gustan',
      precio: 13,
      valoracion: 7.6,
      ingredientes: new Map([
        [0, 'Gambas'],
        [1, 'Guindilla/s'],
        [2, 'perejil'],
        [3, '3 dientes de ajo']
      ]),
      imagen: '../imagenes/gambasAjillo.jpg'
    });
    
    addPlato({
      nombre: 'Cafe',
      descripcion: 'Perfecto para despues de comer',
      precio: 1,
      valoracion: 9.5,
      ingredientes: new Map([
        [0, 'Cacao'],
        [1, 'Agua'],
        [2, 'Azucar']
      ]),
      imagen: '../imagenes/cafe.jpg'
    });
    
    }




