var express = require('express');
var router = express.Router();
var axios = require('axios');
var settingsController = require('../controllers/settingsController');


router.get('/', settingsController.get_settings);






module.exports = router;

