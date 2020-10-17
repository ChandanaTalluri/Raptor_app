var express = require('express');
var router = express.Router();
var axios = require('axios');
var addNewBirdController = require('../controllers/addNewBirdController');

router.get('/', addNewBirdController.get_settings);

router.get('/animals/animalHoomePage', addNewBirdController.get_add_bird);

router.post('/medicines/medicinesHoomePage', addNewBirdController.post_add_bird);

module.exports = router;

