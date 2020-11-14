var express = require('express');
var router = express.Router();
var axios = require('axios');
var foodTypeController = require('../controllers/foodTypeController');

const authMiddleware = require('../middleware/ensureauthenticated');

router.get('/',authMiddleware.ensureAuthenticated,foodTypeController.get_foodType);

router.get('/addFoodType',authMiddleware.ensureAuthenticated, foodTypeController.get_add_foodType);
router.post('/addFoodType',authMiddleware.ensureAuthenticated, foodTypeController.post_add_foodType);

router.get('/updateFoodType',authMiddleware.ensureAuthenticated, foodTypeController.get_update_foodType);
router.post('/updateFoodType',authMiddleware.ensureAuthenticated, foodTypeController.post_update_foodType);

router.get('/deleteFoodType',authMiddleware.ensureAuthenticated, foodTypeController.get_delete_foodType);

module.exports = router;

