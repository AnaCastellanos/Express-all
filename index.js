//Servidor con Express
const express = require('express'); //Instanciamos express
const morgan = require('morgan'); //Middleware.
const app = express(); //Express nos da una función inicial que se asigna a una constante.

//Requiriendo rutas
const routes = require('./routes');
const routesApi = require('./routes-api');

//Configuraciones
app.set('appName', 'Mi primer Server'); //Agregar nueva configuración.
app.set('views', __dirname + '/views'); //__dirname muestra nuestra ruta actual, indicamos la ruta donde se ecuentra la carpeta views.

app.set('view engine', 'ejs'); //Instalar motor de plantilla: Templates

//Middlewares
app.use(morgan('combined')); //Morgan hace lo mismo que el middleware de abajo.

// app.use( (req, res, next) => {
// 	console.log('request url:' + req.url); //Muestra la ruta
// 	next(); //Ejecuta la siguiente función al envíar la respuesta.
// });


//Rutas con middleware
app.use(routes); //Importa las rutas de routes
app.use('/api', routesApi);

//Para todas las rutas no especificadas.
app.get('*', (req, res) => {
	res.end('404: Archivo no encontrado');
});

app.listen(3000, () => {
	console.log('Servidor funcionando en el puerto 3000');
	console.log('Nombre de la App: ', app.get('appName'));
}); //Callback