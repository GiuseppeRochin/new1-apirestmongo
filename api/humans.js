const HumanController = require('../controllers/humanos')
const express = require('express')

const router = express.Router()

router.get('/findall', HumanController.findAllHumans)

router.post('/findbyid', HumanController.findByIdHuman)

router.post('/findbycorreoandpass', HumanController.findByCorreoAndPassHuman)

router.post('/delete', HumanController.deleteOneHuman)

router.post('/addhuman', HumanController.addHuman)

module.exports = router