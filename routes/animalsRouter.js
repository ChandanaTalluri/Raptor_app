var express = require('express');
var router = express.Router();
var axios = require('axios');
var animalsController = require('../controllers/animalsController');
const authMiddleware = require('../middleware/ensureauthenticated');

router.get('/',authMiddleware.ensureAuthenticated,  animalsController.get_animalHome);


router.get('/addAnimal',authMiddleware.ensureAuthenticated, animalsController.get_add_animal);
router.post('/addAnimal',authMiddleware.ensureAuthenticated, animalsController.post_create_animal);


router.get('/updateAnimal',authMiddleware.ensureAuthenticated, animalsController.get_update_animal);
router.post('/updateAnimal',authMiddleware.ensureAuthenticated, animalsController.post_update_animal);


router.get('/delete',authMiddleware.ensureAuthenticated, animalsController.get_delete_animal);




module.exports = router;

