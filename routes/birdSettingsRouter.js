var express = require('express');
var router = express.Router();
var axios = require('axios');
var addNewBirdController = require('../controllers/addNewBirdController');


router.get('/', addNewBirdController.get_settings);

router.get('/animals/animalHomePage', addNewBirdController.get_add_animalHome);

router.get('/medicines/medicinesHomePage', addNewBirdController.get_add_medicineHome);



router.get('/animals/addAnimal', addNewBirdController.get_add_animal);
router.post('/animals/addAnimal', addNewBirdController.post_create_animal);
router.get('/medicines/addMedicins', addNewBirdController.get_add_medicine);

router.get('/animals/updateAnimal', addNewBirdController.get_update_animal);
router.post('/animals/updateAnimal', addNewBirdController.post_update_animal);


router.get('/animals/delete', addNewBirdController.get_delete_animal);

router.get('/medicines/updateMedicins', addNewBirdController.get_update_medicine);


module.exports = router;

