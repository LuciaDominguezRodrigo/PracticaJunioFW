

function cambiarVisibilidad(element) {
   if (element.style.display === "none") {
      element.style.display = "block";
   } else {
      element.style.display = "none";
   }
}


function mensajeBorrarTodo() {
   let link = '/delete_all';
   let borrar = confirm("¿quiere borrar todos los platos?");

   if (borrar) {
      window.location.href = link;
   }
}

function masInfo(nombrePlato) {
   let link = '/masInfo/' + nombrePlato;
   window.location.href = link;
}

function forumlario() {
   let link = '/formulario/';
   window.location.href = link;
}


function cambiarIndice() {
   let link = '/'
   window.location.href = link;
}

function cambiarSobreNosotros() {
   let link = 'sobrenosotros.html';
   window.location.href = link;
}


function borrarPlato(i) {
   if (confirm("¿Está seguro de que quiere borrarlo?")) {
      alert("El plato ha sido eliminado");
   }
}


function nuevoIngrediente(text, idNumber) {
   $("#ingredientes").append(`
       <div id="ingre-${idNumber}" class="white">
         <input placeholder="Añada un ingrediente" value="`+ text + `" class="form-control" id="ingrediente-${idNumber}" type="text" placeholder="Enter your message here..." data-sb-validations="required"></input>
         <button id="bIngre-${idNumber}"> Borrar ingrediente</button>
         <p></p>  
       </div>    
     `);

}

//Añade un campo de entrada de ingrediente en el formulario
function addIngredienteFormulario() {
   const rama = document.getElementById('ingredientes-container');
   const hijos = (rama.children.length);
   const siguienteIngrediente = hijos + 1;
   $("#ingredientes-container").append(`
      <div id="ingredientes-${siguienteIngrediente}" class="form-floating mb-3">
         <input class="form-control" id="ingrediente-0" type="text" placeholder="Enter your message here..." data-sb-validations="required">
         <button class ="boton" type="button" onclick="borrarIngrediente(${siguienteIngrediente})">Borrar</button>
         <label>Ingrediente ${siguienteIngrediente}</label>
         <p></p>
      </div>
   `);
}


