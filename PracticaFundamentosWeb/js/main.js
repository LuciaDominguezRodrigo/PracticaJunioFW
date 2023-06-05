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
  console.log(im)
  console.log(nom)
  let plato = new Plato(nom, desc, prec, val, ingr, im);
  pInsertado = (arrayPlatos.push(plato) - 1);
}


//Creación de platos iniciales de la página
crearPlato('Albondigas', 'Deliciosas bolas de carne', 15, 10.0, ['Carne de vacuno triturada ', 'Huevos ', 'Harina ', 'Perejil ', '3 dientes de ajo ', '1 cebolla '], '../imagenes/Albondigas.jpeg');
crearPlato('Guisantes con jamón', 'Guisantes nacionales con delicisos taquitos de jamoncito', 20, 9.0, ['Guisantes', 'Taquitos de Jamon', 'Surtido de pimientas'], '../imagenes/Guisantes.jpeg');
crearPlato('Paella de marisco', 'Sabrosa paella con marisco fresco', 25, 9.0, ['Arroz bomba', 'marisco fresco', 'sofrito de cebolla y pimineto', 'toque de pimentón'], '../imagenes/Paella.jpeg')
crearPlato('Cocidito madrileño', 'Tradicional cocido madrileño', 10, 9.5, ['Garbanzos', 'carne', 'chorizo'], '../imagenes/Cocido.jpeg')


//Inicializa las secciones ocultando las demás y mostrando la sección "Inicio"
function inicializarSecciones() {
  $("#info").hide();
  let allSections = document.getElementsByTagName('section');
  for (let i = 0; i < allSections.length; i++) {
    if (allSections[i].className.includes("inicio") == false) {
      allSections[i].style.display = 'none';
    }
  }
}


//Cuando se pulsa a un botón de la barra de navegación, oculta todo el contenido y solamente muestra la información de la pestaña seleccionada
function mostrarSeccion(s) {
  $("#plato").html("");
  if (s == "platos") {
    mostrarPlatos();
  }
  let allSections = document.getElementsByTagName('section');
  for (let i = 0; i < allSections.length; i++) {
    allSections[i].style.display = 'none';

  }
  let section = document.getElementsByClassName(s);
  for (let i = 0; i < section.length; i++) {
    section[i].style.display = 'block';
  }
}


//Muestra los platos en el menú "Nuestra carta"
function mostrarPlatos() {
  $('.formulario').hide();
  $('#info').hide()
  $('#plato').show()
  if (arrayPlatos.length == 0) {
    $("#plato").html("<div class=noPlatos>No hay Platos </div>");
  }
  else {
    $("#plato").html("");
    for (let i = 0; i < arrayPlatos.length; i++) {
      $("#plato").append(mostrarPlato(i));
    }
  }
  $("#plato").append(`
    <div class=" botones">
      <a class=" boton" onclick="crearNuevoPlato()">Crear nuevo Plato</a>
    </div>

    `)
    $('#plato').show()
}


//Mueestra la estructura del plato dentro del menú "Nuestra carta"
function mostrarPlato(i) {
  $('#noElementsMessage').hide()
  return `
    <div class="plato">
      <img class="imres1" placeholder=" " src=" ${arrayPlatos[i].getImagen()}  "/></img>
          <div class="card-body p-4">
            <div class="text-center">
              <h5 id="nombrePlato" >  ${arrayPlatos[i].getNombre()} </h5> 
                <div id="precioPlato">  ${arrayPlatos[i].getPrecio()}€ </div>
            </div>
          </div>
          
           <div class="text-center" class="plato button:hover">
              <button onclick="mostrarInfo(${i})">Mas info</button>
           </div>
    </div>
       
  `
}


//Muestra la información detallada de un plato al pulsar el botón "Mas info" de un plato
function mostrarInfo(id) {
  $('#info').show()
  $('#plato').hide()
  $("#name").html(`${arrayPlatos[id].nombre}`)
  $("#description").html(`${arrayPlatos[id].descripcion}`)
  $("#price").html(`Precio: ${arrayPlatos[id].precio} €`)
  $("#valoration").html(`Valoraciones de otros usuarios : ${arrayPlatos[id].valoracion} estrellas`)
  $("#ingredients").html(`Ingredientes: ${arrayPlatos[id].getIngredientes()}`)
  //let content = document.getElementById('ingredients')
  //content.innerHTML = `<h2></h2>`;

  //for (let j = 0; j < arrayPlatos[id].ingredientes.length; i++) {
  //content.innerHTML +=`  
  //<p> ${arrayPlatos[id].ingredientes[j]}</p>  
  //`;  
  //}
  document.getElementById("image").setAttribute("src", arrayPlatos[id].imagen)
  $("#botones").html(`
    <div class=" botones">
      <a class=" boton" onclick="mostrarPlatos()">Mostrar Platos</a>
      <a class=" boton" onclick="ModificarPlato(${id})">Modificar Plato</a>
      <p><br></p>
      <a class=" boton" onclick="BorrarPlato(${id})">Borrar Plato</a> 
      
    </div>
  `)
}

//Gestiona la modificación de los datos de un plato
function ModificarPlato(id){
  let tamaño=arrayPlatos[id].ingredientes.length;
  reiniciarAnadirPlato();
  $('#info').hide();
  $('.formulario').show();

  document.getElementById('nombre').value = arrayPlatos[id].getNombre();
  document.getElementById('descripcion').value = arrayPlatos[id].getDescripcion();
  document.getElementById('precio').value = arrayPlatos[id].getPrecio();
  document.getElementById('valoracion').value = arrayPlatos[id].getValoracion();
  
  $("#ingredientes").html("Ingredientes")
  for (let i = 0; i < arrayPlatos[id].ingredientes.length; i++) {
    nuevoIngrediente(arrayPlatos[id].ingredientes[i], i);
  }
 

  $("#aIngre").click(function(){
      nuevoIngrediente('', tamaño)
      console.log(tamaño)
      tamaño++ 
      $("#guardar").html(`<button  class="boton" id="crearNuevoPlato" onclick="guardarPlato(${id}, ${tamaño})">Guardar</button>`)
    }
  )

  let j = 0
  $("#bIngre-" + j).click(function(){
    console.log('W')
    borrarIngrediente(j)
      
    }  
  )
  $("#Imag").html(`
  <div class="mb-3" id="Imag">
    <h4><p>Imagen</p></h4>
    <input type="text" class="form-control mb-3" id="imagen"/>
    <input id="imgenerico" type="file" data-sb-validations="required" onclick="quitarRuta()"/>
  </div >
  `)

  document.getElementById('imagen').value = arrayPlatos[id].getImagen();
  
    $("#guardado").html(`
    <div class=" botones">
    <div id="guardar"><button  class="boton" id="crearNuevoPlato" onclick="guardarPlato(${id}, ${tamaño})"> Guardar</button></div>
    <button type="button" class="boton" id="Cancelar" onclick="cancelarModificar()">Cancelar</button>
      
    </div>
    `);
 
}

function quitarRuta(){
  $("#Imag").html(`
  <div class="mb-3" id="Imag">
    <h4><p>Imagen</p></h4>
    <input id="imgenerico" type="file" data-sb-validations="required"/>
  </div >
  `)
}

function nuevoIngrediente(text, idNumber){
  $("#ingredientes").append(`
      <div id="ingre-${idNumber}" class="white">
        <input placeholder="Añada un ingrediente" value="`+ text + `" class="form-control" id="ingrediente-${idNumber}" type="text" placeholder="Enter your message here..." data-sb-validations="required"></input>
        <button id="bIngre-${idNumber}"> Borrar ingrediente</button>
        <p></p>  
      </div>    
    `);
  
    $('#bIngre-'+ idNumber).click(function(){
      if(confirm("¿Está seguro de que quiere borrarlo?") == true){
        $('#ingre-' + idNumber).remove();
      }
    });
}


//Guarda el plato modificado
function guardarPlato(id, ingredientes){
  console.log('T')
  console.log(id)
  console.log(ingredientes)
  if(!document.getElementById('nombre').value){
    alert("No puedes quitarle el nombre")
  }
  else{
    arrayPlatos[id].nombre = document.getElementById('nombre').value;
    arrayPlatos[id].descripcion = document.getElementById('descripcion').value;
    arrayPlatos[id].precio = document.getElementById('precio').value;
    arrayPlatos[id].valoracion = document.getElementById('valoracion').value;
    arrayPlatos[id].ingredientes.splice(0, arrayPlatos[id].ingredientes.length)
    console.log(arrayPlatos[id].ingredientes)
    for (let i = 0; i < ingredientes; i++) {
      let ingrediente = $("#ingrediente-"+i).val();
      console.log(ingrediente)
      if(ingrediente){
        arrayPlatos[id].ingredientes.push(ingrediente);
      }  
    }
    let imagen = document.getElementById('imgenerico').value;
    console.log(imagen)
    let nombreArchivo = "";
    if (imagen) {
      
      nombreArchivo = imagen.substring(imagen.lastIndexOf('\\') + 1);
      console.log(nombreArchivo); // Imprime el nombre del archivo en la consola
      nombreArchivo = '../imagenes/' + nombreArchivo
      console.log(nombreArchivo);
    }

    $('.formulario').hide();
    mostrarPlatos();
  }
}



//Notifica sobre el borrado de un plato
function BorrarPlato(id) {
  if (confirm("¿Está seguro de que quiere borrarlo?")) {
    arrayPlatos.splice(id, 1)
    alert("El plato ha sido eliminado");
    mostrarPlatos()
  }

}



function crearNuevoPlato() {
    let tamaño=1;
    reiniciarAnadirPlato();
    mostrarSeccion('formulario');
    $("#ingredientes").html("Ingredientes")
    
    nuevoIngrediente('', 0);
    
    $("#aIngre").click(function(){
      nuevoIngrediente('', tamaño)
      console.log(tamaño)
      tamaño++ 
      $("#guardar").html(`<button  class="boton" id="crearNuevoPlato" onclick="generarPlato(${tamaño})">Guardar</button>`)
    }
  )

 }
 
 
function generarPlato(numIngredientes){
  
   let nombre = document.getElementById('nombre').value;
   if(nombre){
    let descripcion = document.getElementById('descripcion').value;
    let precio = document.getElementById('precio').value;
    if(!precio){precio="?? "}
    let valoracion = document.getElementById('valoracion').value;
    if(!valoracion){valoracion="?? "}
    let ingredientes = [];
    for (let i = 0; i < numIngredientes; i++) {
      let ingrediente = $("#ingrediente-"+i).val();
      if(ingrediente){
        ingredientes.push(ingrediente);
      }  
    }
    let imagen = document.getElementById('imgenerico').value;
    console.log(imagen)
    let nombreArchivo = "";
    if (imagen) {
      
      nombreArchivo = imagen.substring(imagen.lastIndexOf('\\') + 1);
      console.log(nombreArchivo); // Imprime el nombre del archivo en la consola
      nombreArchivo = '../imagenes/' + nombreArchivo
      console.log(nombreArchivo);
    }

    crearPlato(nombre, descripcion, precio, valoracion, ingredientes, nombreArchivo);

    /*for(let i = 0; i< "numero de ingredientes del plato"; i++){
      let ingrediente = document.getElementById("ingrediente-" + i).value;
      ingredientes.push(ingrediente);
    }*/
    mostrarPlatos();
  }
  else{
    alert("No se puede crear un plato sin un nombre");
  }
 }

function cancelarPlato() {
  if (confirm("¿Está seguro de que quiere cancelar?")) {
    alert("nuevo plato cancelado");
    mostrarPlatos()
  }

}

function cancelarModificar() {
  if (confirm("¿Está seguro de que quiere cancelar?")) {
    alert("La modificacion se ha cancelado");
    mostrarPlatos()
  }

}


function reiniciarAnadirPlato() {
  $("#add-plato").html(`
    <section class="formulario">
      <div class="container">
         
          <p></p>
          <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0" class="titulo" >Plato</h2>
          <p></p>
          
          <div>
              <div>
                     <div class="form-floating mb-3">
                          <input class="form-control" id="nombre" type="text" placeholder=" " required="Debes escribir un nombre">
                          <label>Nombre del plato</label>
                      </div>
             
                      <div class="form-floating mb-3">
                          <textarea class="form-control" id="descripcion" type="text" placeholder=" " style="height: 10rem"></textarea>
                          <label>Descripcion</label>
                       </div>
                     
                      <div class="form-floating mb-3">
                          <input class="form-control" id="precio" type="number" placeholder=" " />
                          <label>Precio</label>
                      </div>

                      
                      <div class="form-floating mb-3">
                          <input class="form-control" id="valoracion" type="number" placeholder=" " min="0" max="10"  />
                          <label>Valoracion</label>
                      </div>

                      
                      <div id="ingredientes" class="form-floating mb-3">
                          <input class="form-control" id="ingrediente" type="text" placeholder="Enter your message here..." data-sb-validations="required"><button class ="boton" onclick="borrarIngrediente(${arrayPlatos.length}, i)">Borrar</button></input>
                          <label>Ingredientes</label>
                          <p></p>
                      </div>
                      <div id="addIngrediente">
                        <button  class="boton" id="aIngre">Añadir Ingrediente</button>
                      </div>
                      <p></p>
                      <div class="mb-3" id="Imag">
                          <h4><p>Imagen</p></h4>
                          <input id="imgenerico" type="file" data-sb-validations="required"/>
                      </div >
                      <div id="guardado">
                      <div id="guardar"><button type="button" class="boton" id="crearNuevoPlato" onclick="generarPlato()">Guardar</button></div>
                      <button type="button" class="boton" id="Cancelar" onclick="cancelarPlato()">Cancelar</button>
                      </div>
              </div>
          </div>
      </div>
  </section>
    
    
    
    `)



}

