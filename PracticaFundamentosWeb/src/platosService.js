
const platos = new Map();
let id=0;

export class Plato {
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
}

const recipes = new Map();
let nextId = 0;

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
