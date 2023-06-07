import express from 'express';
import { __dirname } from './dirname.js';
import * as platosService from './platosService.js';

const router = express.Router();


/*manda al AJAX el tamaño del mapa de platos*/

router.get('/fetch_dataBaseSize', (req, res) => {
    res.send('{"tamanioPlatos":"' + platosService.platos.size + '"}');
});

/*inicializa la página de los platos*/
router.get('/', (req, res) => {
    const platos = platosService.getRangoPlatos(0, 5);  /*muestra los 5 primeros platos, esto influye en el AJAX*/

    res.render('index', {   /*hay que crear el moustcahe de oindez*/
        platos: platos
    });
});  

/*borra un plato del mapa*/
router.get('/delete/:nombrePlato', (req, res) => {
    platosService.borrarPlato(req.params.nombrePlato);
    res.render('resetURL');
});

/*busca un plato en el mapa de platos creados*/
router.get('/search_plato', (req, res) => {
    let platoBuscado= req.query.platoBuscado;
    let hasPlatos = platosService.platos.has(platoBuscado);
    res.send('{"tienePlato":' + hasPlatos + '}');
});

export default router;



