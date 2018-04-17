//Servidor con Express
const express = require('express'); //Instanciamos express
const morgan = require('morgan'); //Middleware.
const app = express(); //Express nos da una función inicial que se asigna a una constante.

//Configuraciones
app.set('appName', 'Mi primer Server'); //Agregar nueva configuración


//Middlewares
app.use(morgan('combined')); //Morgan hace lo mismo que el middleware de abajo.

// app.use( (req, res, next) => {
// 	console.log('request url:' + req.url); //Muestra la ruta
// 	next(); //Ejecuta la siguiente función al envíar la respuesta.
// });


//Rutas
//Ruta inicial
app.get('/', (req, res) => {  //Require: Toda la información que el navegador esta pidiendo.
	res.end('Hola Mundo'); //Response: Respuesta por parte del servidor.
});

//Agregamos más rutas
app.get('/login', (req, res) => {
	res.end('Aqui va el login');
});

//Para todas las rutas no especificadas.
app.get('*', (req, res) => {
	res.end('404: Archivo no encontrado');
});

app.listen(3000, () => {
	console.log('Servidor funcionando en el puerto 3000');
	console.log('Nombre de la App: ', app.get('appName'));
}); //Callback