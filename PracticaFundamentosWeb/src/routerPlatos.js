import express from 'express';
import { __dirname } from './dirname.js';
import * as platosService from './platosService.js';

const router = express.Router();


/*manda al AJAX el tamaño del mapa de platos*/

router.get('/fetch_dataBaseSize', (req, res) => {
    res.send('{"tamanioPlatos":"' + platosService.platos.size + '"}');
});

/*inicializa la página de los platos*/
router.get('/plato', (req, res) => {
    const platos = platosService.getRangoPlato(0, 5);  /*muestra los 5 primeros platos, esto influye en el AJAX*/
    res.render('plato', {   /*hay que crear el moustcahe de oindez*/
        platos: platos
    });
});  

router.get('/', (req, res)=>{
    res.render('inicio');
} );

router.get('/sobrenosotros', (req, res)=>{
    res.render('sobrenosotros');
} );

router.get('/masInfo/:id', (req, res) => {                
    console.log("p");
    let plato = platosService.getPlat(req.params.id);
    res.render('masInfo', plato);
});

/*borra un plato del mapa*/
router.get('/delete/:id', (req, res) => {
    platosService.borrarPlat(req.params.id);
    res.render('resetURL');
});

/*busca un plato en el mapa de platos creados*/
router.get('/search_plato', (req, res) => {
    let platoBuscado= req.query.platoBuscado;
    let hasPlatos = platosService.platos.has(platoBuscado);
    res.send('{"tienePlato":' + hasPlatos + '}');
});

export default router;



