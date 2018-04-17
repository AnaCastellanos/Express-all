//Servidor con Express
const express = require('express'); //Instanciamos express
const app = express(); //Express nos da una función inicial que se asigna a una constante.

app.get('/', (req, res) => {  //Require: Toda la información que el navegador esta pidiendo.
	res.end('Hola Mundo'); //Response: Respuesta por parte del servidor.
});

app.listen(3000, () => {
	console.log('Servidor funcionando en el puerto 3000');
}); //Callback