import platosPredetermiandos from './platosPredetermiandos.js'


export class Plato {
   nombre = '';
   descripcion = '';
   precio = 0;
   valoracion = 0.0;
   ingredientes = new Map();
   imagen = '';

    constructor (nombre, descripcion, precio, valoracion, ingredientes, imagen) {
       this.nombre = nombre;
       this.descripcion= descripcion;
       this.precio= precio;
       this.valoracion = valoracion;
       this.ingredientes= ingredientes;
       this.imagen=imagen;
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

export let platos = new Map();
 platosPredetermiandos.cargarInfo();

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
   numPlatos.reverse(); //dichos valores empiezan de final a principio, por eso pone .reverse()
   if (from !== undefined) { //mienstras no me tenga que devolver todos los elementos...
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


