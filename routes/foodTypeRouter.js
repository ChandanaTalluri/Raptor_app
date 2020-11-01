var express = require('express');
var router = express.Router();
var axios = require('axios');
var foodTypeController = require('../controllers/foodTypeController');



router.get('/',foodTypeController.get_foodType);

router.get('/addFoodType', foodTypeController.get_add_foodType);
router.post('/addFoodType', foodTypeController.post_add_foodType);

router.get('/updateFoodType', foodTypeController.get_update_foodType);
router.post('/updateFoodType', foodTypeController.post_update_foodType);

router.get('/deleteFoodType', foodTypeController.get_delete_foodType);

module.exports = router;

