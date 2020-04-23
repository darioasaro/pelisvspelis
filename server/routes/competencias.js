const express = require( 'express' )
const router = express.Router()
const compControler = require('../controller/competencias/controller')

router.get('/',compControler.getCompetencias)

module.exports = router