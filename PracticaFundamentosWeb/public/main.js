

  function cambiarVisibilidad(element) {
    if (element.style.display === "none") {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  }

  function mensajeBorrar (nombrePlato){
     let link = '/delete/' + nombrePlato;
     let borrar= confirm ("¿quiere borrar el plato?");

     if (borrar) {
      window.location.href = link;
     }
  }


  function mensajeBorrarTodo (){
    let link = '/delete_all';
    let borrar= confirm ("¿quiere borrar todos los platos?");

    if (borrar) {
     window.location.href = link;
    }
 }

  function masInfo (nombrePlato) {
      let link = '/masInfo/' + nombrePlato;
      window.location.href = link;
  }

  function forumlario () {
     let link= '/formulario/';
    window.location.href = link;
  }


  function cambiarIndice (){
    let link = '/'
    window.location.href = link;
  }

  function cambiarSobreNosotros (){
    let link = 'sobrenosotros.html';
    window.location.href=link;
  }

  function cambiarInicio(){
    let link="inicio.html";
    windowlocation.href=link;
  }
  function borrarPlato(i){
    if(confirm("¿Está seguro de que quiere borrarlo?")){
      alert("El plato ha sido eliminado");
    }
  }
 

  