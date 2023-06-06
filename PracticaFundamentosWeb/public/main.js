export function cambiarVisibilidad(element) {
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


  