
class Plato {
   //Inicialización de las variables antes de llamar al constructor. Se ponen por mayor claridad y mayor parecido a Java
   nombre = '';
   descripcion = '';
   precio = 0;
   valoracion = 0.0;
   ingredientes = [];
   imagen = '';

   constructor(nombre, descripcion, precio, valoracion, ingredientes, imagen) {
      this.nombre = nombre;
      this.descripcion = descripcion;
      this.precio = precio;
      this.valoracion = valoracion;
      this.ingredientes = ingredientes;
      this.imagen = imagen; //Hay que revisar cómo se guardan y se cargan las imagenes en los objetos Plato (o bien descargando la imagen y serializando en base64 o bien obteniendo la ruta local o url para descargar la imagen)
   }

   getNombre = () => this.nombre
   setNombre = nombre => this.nombre = nombre

   getDescripcion = () => this.descripcion
   setDescripcion = descripcion => this.descripcion = descripcion

   getPrecio = () => this.precio
   setPrecio = precio => this.precio = precio

   getValoracion = () => this.valoracion
   setValoracion = valoracion => this.valoracion = valoracion

   getIngredientes = () => this.ingredientes
   setIngredientes = ingredientes => this.ingredientes = ingredientes

   getImagen = () => this.imagen
   setImagen = imagen => this.imagen = imagen
}

//ARRAY DE OBJETOS DE LA CLASE PLATO
let arrayPlatos = new Array();

function crearPlato(nom, desc, prec, val, ingr, im) { //('Albóndigas','Las más deliciosas', 8, 4.5, ['romero', 'sal'], 'albondigas.jpg');
   let plato = new Plato(nom, desc, prec, val, ingr, im);
   posicionPlatoInsertado = (arrayPlatos.push(plato) - 1);
}

crearPlato('Albondigas', 'Bolas de carne', 15, 10.0, ['Carne de vacuno triturada', 'Huevos', 'Harina', 'Perejil', '3 dientes de ajo', '1 cebolla'], '../PracticaFundamentosWeb/imagenes/Albondigas.jpeg');
crearPlato('Guisantes con jamon', 'Pelotitas verdes con delicisos taquitos de jamoncito', 20, 9.0, ['Guisantes', 'Taquitos de Jamon', 'Surtido de pimientas'], '../PracticaFundamentosWeb/imagenes/Guisantes.jpeg');

function mostrarSeccion(s) {
   let allSections = document.getElementsByTagName('section');
   for (let i = 0; i < allSections.length; i++) {
      allSections[i].style.display = 'none';
      
   }
   let section = document.getElementsByClassName(s);
   for (let i = 0; i < section.length; i++) {
      section[i].style.display = 'block';
   }
}

function inicializarSecciones() {
   let allSections = document.getElementsByTagName('section');
   for (let i = 0; i < allSections.length; i++) {
      if (allSections[i].className.includes("inicio") == false) {
         allSections[i].style.display = 'none';
      }
   }
}

function mostrarPlato(i){
   $('#noElementsMessage').hide()
   return
   `  <div class="card h-100">

           <img class="card-img-top" src=" + ${Plato[i].getImagen()} + " alt="..." />
           <div class="card-body p-4">
               <div class="text-center">
                   <h5 id="nombrePlato" class="fw-bolder"> + ${Plato[i].getNombre()} </h5>
                   <div id="precioPlato"> + ${Plato[i].getPrecio()} +</div>
               </div>
           </div>
           <!-- Product actions-->
           <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
               <div class="text-center"><a id="boton- + ${i} + class="btn btn-outline-dark mt-auto" href="#">Mas info</a></div>
           </div>
       </div>
   `
 }

 function mostrarPlatos(){
   for (let i = 0; i < Plato.length; i++) {
       $("#platos").append(mostrarPlato(i));
   }
   $('#platos').show()
 }



/*
// Para solo mostrar la pagina principal al comienzo de la ejecución
// Para solo mostrar la pagina principal al comienzo de la ejecución
$(function () {
  // Se esconden las que no sirven ya que al principio todas estan predeterminadas a mostrarse
  $('#noElementos').hide()
  $("#anadirPlato").hide();
  
  reiniciarAnadirPlato();
  
  // Se añaden las vistas de los platos predeterminados
  mostrarPlatos();
  
  // Añadir la funcionalidad al boton para ir al formulario y añadir un plato
  $("#boton-anadir").click(function () {
      $("#platos").hide();
      $("#anadirPlato").show();
      $('#titulo').html('A&ntilde;adir nuevo plato')
       

  });
  
});


function mostrarPlatos(){
  for (let i = 0; i < Plato.length; i++) {
      $("#platos").append(mostrarPlato(i));
  }
}

function mostrarPlato(i){
  $('#noElementsMessage').hide()
  return
      <div class="card h-100">
          <img class="card-img-top" src="` + Plato[i].getImagen() + `" alt="..." />
          <div class="card-body p-4">
              <div class="text-center">
                  <h5 id="nombrePlato" class="fw-bolder">` + Plato[i].getNombre()`</h5>
                  <div id="precioPlato">` + Plato[i].getPrecio() +`</div>                               
              </div>
          </div>
          <!-- Product actions-->
          <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div class="text-center"><a id="boton- `+ i +` class="btn btn-outline-dark mt-auto" href="#">Mas info</a></div>
          </div>
      </div>
  `
}


function BorrarPlato(id){
  if (confirm("¿Está seguro de que quiere borrarlo?")) {      

      Plato.splice(id,1)
      alert("El plato ha sido eliminado");
  }

  mostrarPlatos()
}

function Modificar(i){



}


//COSAS DE LA ANTIGUA PRÁCTICA QUE PUEDEN SERVIR
function hide(e) {
  e.style.display = "none";
}

function show(e) {
  e.style.display = "block";
}


//botón eliminar elemento
function eliminarElemento (divid) {
  let submenu = document.getElementById(divid);
  alert("¿Esta seguro de eliminarlo?")
  if( submenu.style.display === "none") {
      submenu.style.display = "block";
  } else {
      submenu.style.display = "none";
  }
}

//almacenamiento de datos de la página en ED: array
p1={
'titulo': document.getElementById('titulolentejas').innerText,
'info': document.getElementById('infolentejas').innerText,
}


p2={
'titulo': document.getElementById('titulotortilla').innerText,
'info': document.getElementById('infotortilla').innerText,
}
p3={
'titulo': document.getElementById('titulopaella').innerText,
'info': document.getElementById('infopaella').innerText,
}


let arrayPlatos = [p1,p2,p3];
console.log (arrayPlatos);


/*masinfo
function masinfo () {
  let elem = document.getElementById('paella');
  let elem2 = document.getElementById('tortilla');
  let elem3 = document.getElementById('infolentejas');
  
  elem.style.display= "none";
  elem2.style.display="none";
  elem3.style.display="block";
}

function masinfo1 () {
  let elem = document.getElementById('paella');
  let elem2 = document.getElementById('lentejas');
  let elem3 = document.getElementById('infotortilla');
  
  elem.style.display= "none";
  elem2.style.display="none";
  elem3.style.display="block";
}


function masinfo2 () {
  let elem = document.getElementById('lentejas');
  let elem2 = document.getElementById('tortilla');
  let elem3 = document.getElementById('infopaella');
  
  elem.style.display= "none";
  elem2.style.display="none";
  elem3.style.display="block";
}



//botón mostrar elementos
function MuestraElementos(divid,divid2) {
let muestra = document.getElementById(divid);
if( muestra.style.display === "block") {
    muestra.style.display = "block";
} else {
    muestra.style.display = "block";
}
let muestra2 = document.getElementById(divid2);
if( muestra2.style.display === "block") {
    muestra2.style.display = "block";
} else {
    muestra2.style.display = "block";
}
}



//funcion añadir posición array (añadir hueco para plato)
function addPosArray (element){
  arrayPlatos.push (element);
}


//mostrarformulario de añadir 
function mostrarformulario () {
let e=document.getElementById('formulariob')
let elem = document.getElementById('lentejas');
let elem2 = document.getElementById('tortilla');
let elem3 = document.getElementById('paella');

elem.style.display= "none";
elem2.style.display="none";
elem3.style.display="none";
e.style.display = "block";
}


//funcion que mete las cosas introducidas en el formulario en el array
function addArray (){
  let nombre=document.getElementById('nombreform').value;
  let info=document.getElementById ('infoform').value;
  nuevoplato= {
    'titulo': nombre, 
    'info' : info
  }
  arrayPlatos.push(nuevoplato);
  console.log (arrayPlatos);
}


/***************FUNCIONES MODIFICAR 

function modificarElementoLentejas (){
let info = document.getElementById('infoformlen').value;
let titulo= document.getElementById('tituloformlen').value;

document.getElementById("titulolentejas").innerText = titulo;
document.getElementById("infolentejas").innerText = info;
}

function modificarElementoTortilla (){
let info = document.getElementById('infoformtort').value;
let titulo= document.getElementById('tituloformtort').value;

document.getElementById("titulotortilla").innerText = titulo;
document.getElementById("infotortilla").innerText = info;
}

function modificarElementoPaella (){
let info = document.getElementById('infoformpae').value;
let titulo= document.getElementById('tituloformpae').value;

document.getElementById("titulopaella").innerText = titulo;
document.getElementById("infopaella").innerText = info;
}





/***************ACCESO A FORMULARIOS 
function cancelar (elem){
alert("¿Esta seguro de que quieres cancelar?");
let formulario2= document.getElementById(elem);
formulario2.style.display="none";
}

function volver (){

alert("¿Esta seguro de que quieres volver?");
let lentejas= document.getElementById('lentejas');
let tortilla= document.getElementById('tortilla');
let paella= document.getElementById('paella');
let form2=document.getElementById ('formulariob')


form2.style.display="none";
lentejas.style.display="block";
tortilla.style.display="block";
paella.style.display="block";



}


function botonmodif(elem){
let formulario2= document.getElementById (elem);
formulario2.style.display="block";
}

/***********   FUNCTION CREARELEMENTO 
function crearElem() {
  
let nuevoplato = document.createElement("div"); //Creo una capa div
nuevoplato.setAttribute ("class","plato rounded-3 m-3 p-2 text-light");
nuevoplato.id = "nombre";
document.body.children[3].appendChild(nuevoplato);

let platointerior = document.createElement("div");
platointerior.setAttribute ("class","col-lg-12 col-md-12 col-sm-12 d-flex justify-content-start my-5 icono-wrap");
nuevoplato.appendChild(platointerior);

let imagen = document.createElement("img");
imagen.setAttribute ("src", "lentejas.jpg");
imagen.setAttribute ("width", "200");
imagen.setAttribute ("height", "200");
platointerior.appendChild(imagen);

let fondoplato = document.createElement("div");
fondoplato.setAttribute ("class","bg-dark");
fondoplato.id = "joe";
platointerior.appendChild(fondoplato);


let tituloplato = document.createElement("h3");
tituloplato.setAttribute("class","fs-5 mt-4 px-4 pb-1 m-1");
tituloplato.id = "titulolentejas";
tituloplato.innerHTML = '<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star"></span><span class="fa fa-star"></span>';
tituloplato.innerText=document.getElementById ('nombreform').value
fondoplato.appendChild(tituloplato);

let infoplato = document.createElement("p");
infoplato.setAttribute ("class","px-4");
infoplato.id = "infolentejas";
infoplato.setAttribute ("display","none");
infoplato.innerText = document.getElementById('infoform').value;
fondoplato.appendChild(infoplato);

let masinfo = document.createElement("button");
masinfo.setAttribute("type","button");
masinfo.setAttribute("onclick","masinfo('lentejas')");
masinfo.setAttribute("class","btn btn-success info m-4");
masinfo.innerText = "Más información";
fondoplato.appendChild(masinfo);

let modifelem = document.createElement("button");
modifelem.setAttribute("type","button");
modifelem.setAttribute("class","btn btn-primary cambiar m-0");
modifelem.innerText = "Modificar elemento";
fondoplato.appendChild(modifelem);

let elimelem = document.createElement("button");
elimelem.setAttribute("type","button");
elimelem.setAttribute("class","btn btn-danger borrar m-3");
elimelem.innerText = "Eliminar elemento";
fondoplato.appendChild(elimelem);

}

function botonnuevoElemento() {
let elem1=document.getElementById('lentejas');
let elem2=document.getElementById('tortilla');
let elem3=document.getElementById('paella');
let elemmos=document.getElementById('sinelementos');
let boton=document.getElementById('boton');

if ((elem1.style.display =="none") && (elem2.style.display =="none") && (elem3.style.display =="none")){
  elemmos.style.display= "block";
  boton.style.display="block";
}
}

*/

