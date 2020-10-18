var express = require('express');
var router = express.Router();
var axios = require('axios');
var addNewBirdController = require('../controllers/addNewBirdController');

console.log("entered router");
router.get('/', addNewBirdController.get_settings);

router.get('/animalHoomePage', addNewBirdController.get_add_animal);

router.get('/medicinesHoomePage', addNewBirdController.get_add_medicine);

module.exports = router;

