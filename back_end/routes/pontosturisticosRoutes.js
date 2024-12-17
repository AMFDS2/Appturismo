var express = require('express');
var router = express.Router();
var pontosturisticosController = require('../controls/pontosturisticosController.js');

router.get('/', pontosturisticosController.getonePontosturisticos);
router.post('/', pontosturisticosController.createPontosturisticos);
router.get('/:id', pontosturisticosController.getPontosturisticos);
router.get('/cpf/:id', pontosturisticosController.getPontosturisticos);
router.put('/:id', pontosturisticosController.updatePontosturisticos);
router.delete('/:id', pontosturisticosController.deletePontosturisticos);

module.exports = router;