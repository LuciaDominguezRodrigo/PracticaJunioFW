import cargarInfo from './platosPredeterminados.js'


export class Plato {
   nombre = '';
   descripcion = '';
   precio = 0;
   valoracion = 0.0;
   ingredientes = new Map();
   imagen = '';
   id='';

    constructor (nombre, descripcion, precio, valoracion, ingredientes, imagen, id) {
       this.nombre = nombre;
       this.descripcion= descripcion;
       this.precio= precio;
       this.valoracion = valoracion;
       this.ingredientes= ingredientes;
       this.imagen=imagen;
       this.id=id;
    }

 getNombre () { return this.nombre;}
 getDescripcion (){ return this.descripcion;}
 getPrecio (){ return this.precio;}
 getValoracion(){ return this.valoracion;}
 getIngredientes (){ return this.ingredientes;}
 getImagen () { return this.imagen;}

 setNombre (nombreNuevo) { this.nombre=nombreNuevo;}
 setDescripcion (descripcionNueva) { this.descripcion = descripcionNueva;}
 setPrecio (precioNuevo) {this.precio= precioNuevo;}
 setValoracion (valoracionNueva) {this.valoracion = valoracionNueva;}
 setIngredientes (nuevosIngredientes) {this.ingredientes = nuevosIngredientes;}
 setImagen (nuevaImagen) {this.imagen = nuevaImagen;}

 /*modificar(p2){
   if (this.nombre != p2.getNombre()){
      this.setNombre(p2.getNombre());
   }
   if (this.descripcion != p2.getDescripcion()){
         this.setDescripcion(p2.getDescripcion());
   }
   if (this.precio != p2.getPrecio()){
      this.setPrecio(p2.getPrecio());
   }
   if (this.valoracion != p2.getValoracion()){
      this.setValoracion(p2.getValoracion());
   }
  
  let ingred1 = this.getIngredientes()
  let ingred2 = p2.getIngredientes()

  for (let i = 0; i < ingred2.length; i++){
      if(ingred1.length <= i || ingred1[i][1]!=ingred2[i][1]){
          this.ingredientes.set(i, ingred2[i][1])
      }
   } 
   if (ingred1.length > ingred2.length){
         for (let i = ingred2.length; i < ingred1.length; i++){
            this.ingredientes.delete(i)
         }
   }

  if (this.imagen != p2.getImagen()){
   this.setImagen(p2.getImagen());
  }
  
  }*/


}
   const p = new Map();
   export let platos = new Map();
   cargarInfo();
   console.log(platos)
   for (const [key, value] of platos.entries()) {
      p.set(key, value);
   }
   console.log(p);

export function aniadirPlato(plato){
   platos.set(plato.getNombre(),plato);
}

export function borrarPlato(nombrePlato){
    platos.delete(nombrePlato)
}

export function borrarTodosPlatos () {
   platos.clear();
}

export function getPlato (nombrePlato) {
   return platos.get(nombrePlato);
}

export function getTodosPlatos() {
   return platos.values();
}

export function getRangoPlatos(from, to) {
   let numPlatos = [...platos.values()]; //coge los valores que haya en el mapa y los mete en un array
   if (from !== undefined) { //mienstras no me tenga que devolver todos los elementos...
      console.log(numPlatos)
      return numPlatos.slice(from, to); //devuelveme los platos que te he pedido
   } else {
       return numPlatos; //devuélveme todos los platos que tengas
   }
}


export function modificarPlato (nuevoPlato) {
      platos[nuevoPlato.getName()] = nuevoPlato;
  }


/*export function getPlatos(from, to){
   let arrayPlatos = new Array()
   let platosArray = [...platos]
   for (let i = 0; i < platosArray.length; i++) {
         arrayPlatos[i] = { 
           id: platosArray[i][0],
           nombre: platosArray[i][1].getNombre(),            
           precio: platosArray[i][1].getPrecio(),
           image: platosArray[i][1].getImagen(),   
         };
   }
   return arrayPlatos.slice(from, to);
}

export function getPlato(id){
   let thisPlato = recipes.get(i.toString())

   let ingredientesMap = thisPlato.getIngredientes()
   let ingredientesArray = new Array()
   for (let i = 0; i < ingredientesMap.length; i++) {
      ingredientesArray[i] = {id:i, ingrediente: ingredientesMap[i][1]}
   }

   let plato = {
       id: i.toString(),
       nombre: thisPlato.getNombre(),
       descripcion: thisPlato.getDescripcion(),
       precio: thisPlato.getPrecio(),
       valoracion: thisPlato.getValoracion(),
       ingredientes: ingredientesArray,
       imagen: thisPlato.getImagen()
   };
   return plato

}

export function modificarPlato(id, plato){
   let newPlato = new Plato(plato)
   platos.get(id).modificar(newPlato)
}
*/ 

const plat = new Map();
export let nextId = 0;

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

export function addPlato(plato) {                             //funcion para añadir la nota al mapa junto con el id
   let id = nextId++;
   plato.id = id.toString();
   plat.set(plato.id, plato);
   console.log(plato)
}

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