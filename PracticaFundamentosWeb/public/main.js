

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


//Borra un ingrediente por una id
function borrarIngrediente(id){
   if(confirm("¿Está seguro de que quiere elininar el ingrediente?")){
      let plato = document.getElementById('ingredientes-'+ id);
      plato.parentNode.removeChild(plato);
   }

}


//Añade un campo de entrada de ingrediente en el formulario
function addCuadroIngredienteFormulario() {
   const rama = document.getElementById('ingredientes-container');
   const hijos = (rama.children.length);
   const siguienteIngrediente = hijos + 1;
   $("#ingredientes-container").append(`
      <div id="ingredientes-${siguienteIngrediente}" class="form-floating mb-3">
         <input class="form-control" id="ingrediente-0" type="text" placeholder="Enter your message here..." data-sb-validations="required" name="ingrediente[]" value="" >
         <button class ="boton" type="button" onclick="borrarIngrediente(${siguienteIngrediente})">Borrar</button>
         <label>Ingrediente</label>
         <p></p>
      </div>
   `);
}


function addIngredientesFormulario(ingred) {
   console.log(ingred);

   for(let i=0; i < ingredientes.length; i++){
      const rama = document.getElementById('ingredientes-container');
         const hijos = (rama.children.length);
         const siguienteIngrediente = hijos + 1;
         $("#ingredientes-container").append(`
            <div id="ingredientes-${siguienteIngrediente}" class="form-floating mb-3">
               <input class="form-control" id="ingrediente-${siguienteIngrediente}" type="text" placeholder="Enter your message here..." data-sb-validations="required" name="ingrediente[]" value="${ingred[i]}">
               <button class ="boton" type="button" onclick="borrarIngrediente(${siguienteIngrediente})">Borrar</button>
               <label>Ingrediente</label>
               <p></p>
            </div>
         `);
   }
}










