var express = require('express');
var router = express.Router();
var axios = require('axios');
var animalsController = require('../controllers/animalsController');


router.get('/', animalsController.get_animalHome);


router.get('/addAnimal', animalsController.get_add_animal);
router.post('/addAnimal', animalsController.post_create_animal);


router.get('/updateAnimal', animalsController.get_update_animal);
router.post('/updateAnimal', animalsController.post_update_animal);


router.get('/delete', animalsController.get_delete_animal);




module.exports = router;

