
const platos = new Map();
let id=0;

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

 getNombre () {
   return this.nombre;
 }

 getDescripcion (){
    return this.descripcion;
 }

 getPrecio (){
   return this.precio;
 }

 getValoracion(){
   return this.valoracion;
 }

 getIngredientes (){
   return this.ingredientes;
 }

 getImagen () {
    return this.imagen;
 }

 setNombre (nombreNuevo) {
    this.nombre=nombreNuevo;
 }

 setDescripcion (descripcionNueva) {
    this.descripcion = descripcionNueva;
 }

 setPrecio (precioNuevo) {
    this.precio= precioNuevo;
 }

 setValoracion (valoracionNueva) {
    this.valoracion = valoracionNueva;
 }

 setIngredientes (nuevosIngredientes) {
    this.ingredientes = nuevosIngredientes;
 }

 setImagen (nuevaImagen) {
    this.imagen = nuevaImagen;
 }

 modificar(p2){
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
  
}

}

// Lista predefinida de platos
let platosEjemplo = [
    ['Albondigas', 'Deliciosas bolas de carne', 15, 10.0, new Map ([[0,'Carne de vacuno triturada'],[1,'Huevos'],[2,'Harina'],[3,'3 dientes de ajo '],[4,'1 cebolla']]), '../imagenes/Albondigas.jpeg'],

    ['Guisantes con jamón', 'Guisantes nacionales con delicisos taquitos de jamoncito', 20, 9.0, new Map ([[0,'Guisantes'],[1,'Taquitos de Jamon'],[2,'Surtido de pimientas']]), '../imagenes/Guisantes.jpeg'],

    ['Paella de marisco', 'Sabrosa paella con marisco fresco', 25, 9.0, new Map ([[0,'Arroz bomba'],[1,'marisco fresco'],[2,'sofrito de cebolla y pimineto'], [3, 'toque de pimentón']]), '../imagenes/Paella.jpeg'],
    
    ['Cocidito madrileño', 'Tradicional cocido madrileño', 10, 9.5, new Map ([[0,'Garbanzos'],[1,'carne'],[2,'chorizo']]), '../imagenes/Cocido.jpeg'],

    ['Macarrones con chorizo', 'Macarrones con chorizo al estilo casero', 8, 8.9, new Map ([[0,'Chorizo'],[1,'Ajo en polvo'],[2,'Cebolla frita'], [3, 'Comino'], [4, 'Pimentón'], [5, 'Vino blanco'], [6, 'Agua'], [7, 'Macarrones']]), '../imagenes/macarrones.jpg'],

    ['Tortilla de patatas', 'La española', 11, 7.5, new Map ([[0,'Patatas'],[1,'Huevos'],[2,'Sal']]), '../imagenes/tortilla.jpeg'],

    ['Pizza', 'Mejor que la de Italia', 17, 6.0, new Map ([[0,'Harina'],[1,'Huevos'],[2,'Salsa de tomate'], [3, 'Carne de bacuno'], [4, 'Bacon']]), '../imagenes/pizza.jpg'],

    ['Lubina', 'Al horno y con mucho sabor', 9, 7.75, new Map([[0, 'Lubina'], [1, 'Cebolla'], [2, '3 dientes de ajo'], [3, 'Agua'], [4, 'Limon']]), '../imagenes/lubina.jpg'],
    
    ['Patatas bravas', 'Un plato que nunca defrauda', 8, 8.0, new Map([[0, 'Patatas'], [1, 'Salsa brava'], [2, 'Toque de sal'], [3, 'Perejil']]), 'imagenes/patatasBravas.jpeg']

    ['Tarta de Santiago', 'Postre gallego por excelencia', 6, 5.5, new Map([[0,'Azucar'],[1,'Raladura de limon'],[2,'Almendra picada'],[3,'3 huevos'],[4,'2 cucharadas de mantequilla'],[5,'harina']]), 'imagenes/tartaSantiago.jpeg'],

    ['Gambas al ajillo', 'Puedes elegir cuan picantes te gustan', 13, 7.6, new Map([[0, 'Gambas'], [1, 'Guindilla/s'], [2, 'perejil'], [3, '3 dientes de ajo']]), 'imagenes/gambasAjillo.jpg'],

    ['Cafe', 'Perfecto para despues de comer', 1, 9.5, new Map([[0, 'Cacao'], [1, 'Agua'], [2, 'Azucar']]), 'imagenes/cafe.jpg']
]

for (const i of platosEjemplo) {
    addPlato(i)
}

export function addPlato(plato) {
    let newPlato = new Plato(plato)
    platos.set(id.toString(), newPlato);
    return id++
}

export function borrarPlato(id){
    platos.delete(id.toString())
}

export function getPlatos(from, to){
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

