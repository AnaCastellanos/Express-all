//Rutas
const express = require('express');
const router = express.Router();

//router es un objeto que estamos exportando

//Ruta inicial
router.get('/', (req, res) => {  //Require: Toda la información que el navegador esta pidiendo.
	res.render('index.ejs'); //Carga el template (renderiza una vista) //Response: Respuesta por parte del servidor.
});

//Agregamos más rutas
router.get('/login', (req, res) => {
	res.render('login.ejs');
});


module.exports = router; //Exporta el objeto router