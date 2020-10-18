var express = require('express');
var router = express.Router();
var feedingController = require('../controllers/feedingController');

router.get('/', feedingController.get_feeding);

module.exports = router;

