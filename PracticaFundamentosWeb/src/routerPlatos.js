import express from 'express';
import { __dirname } from './dirname.js';
import * as platosService from './platosService.js';

const router = express.Router();

let contador=5;

/*manda al AJAX el tamaño del mapa de platos*/
router.get('/fetch_dataBaseSize', (req, res) => {
    res.send('{"tamanioPlatos":"' + platosService.platos.size + '"}');
});

/*inicializa la página de los platos*/
router.get('/nuestraCarta', (req, res) => {
    const platos = platosService.getRangoPlato(0, 5);  /*muestra los 5 primeros platos, esto influye en el AJAX*/
    contador=5;
    res.render('nuestraCarta', {  
        platos: platos
    });
});  

router.get('/', (req, res)=>{
    res.render('inicio');
} );

router.get('/sobreNosotros', (req, res)=>{
    res.render('sobreNosotros');
} );

router.get('/masInfo/:id', (req, res) => {                
    let id = parseInt(req.params.id);
    let plato = platosService.getPlat(id);
    const platoData = {
      nombre: plato.getNombre(),
      descripcion: plato.getDescripcion(),
      precio: plato.getPrecio(),
      valoracion: plato.getValoracion(),
      ingredientes: plato.getIngredientes(),
      imagen: plato.getImagen(),
      id: plato.getId()
    };
    res.render('masInfo', {plato: platoData});
});

/*borra un plato del mapa*/
router.get('/delete/:id', (req, res) => {
    let id = parseInt(req.params.id);
    platosService.borrarPlat(id);
    res.render('platoBorrado');
});


/*busca un plato en el mapa de platos creados*/
router.get('/search_plato', (req, res) => {
    let platoBuscado= req.query.platoBuscado;
    let hasPlatos = platosService.platos.has(platoBuscado);
    res.send('{"tienePlato":' + hasPlatos + '}');
});

router.get('/nuevosPlatos', (req, res) => {
    const platos = platosService.getRangoPlato(contador, contador+5);  /*muestra los 5 primeros platos, esto influye en el AJAX*/
    contador +=5;
    //console.log(platos)
    //console.log(contador);
    res.render('nuevosPlatos', {   /*hay que crear el moustcahe de oindez*/
        platos: platos
    });
});  


//Rutas del formulario

router.get('/formulario', (req, res) => {
   res.render('formulario');
});

router.post('/guardarPlato', (req, res) => {

   let nombre = req.body.nombre;
   let desc = req.body.descripcion;
   let precio = req.body.precio;
   let valoracion = req.body.valoracion;

   platosService.addPost({ user, title, text });

   res.render('nuestraCarta');
});





export default router;



