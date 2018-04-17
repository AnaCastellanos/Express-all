//Enviar datos desde el servidor al navegador

const express = require('express');
const router = express.Router(); //Requerimos el modulo de express llamado Router

router.get('/', (req, res) => {
	res.json({ //enviamos un JSON de respuesta
		miprimerApi: 'Works'
	})
}); //Un router que va a pedir index

module.exports = router;