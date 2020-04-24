const express = require( 'express' )
const router = express.Router()
const compControler = require('../controller/competencias/controller')
const verificarComp = require ('../middelwares/verificarCompetencia.js').verificarCompetencia
const verificarPeli = require('../middelwares/verificarPelicula.js').verificarPelicula
router.get('/',compControler.getCompetencias)
router.get('/:id/peliculas',verificarComp,compControler.getDosPeliculas)
router.post('/:id/voto',verificarComp,verificarPeli,compControler.setVoto)

module.exports = router