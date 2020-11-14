var express = require('express');
var router = express.Router();
var axios = require('axios');
var settingsController = require('../controllers/settingsController');
const authMiddleware = require('../middleware/ensureauthenticated');

router.get('/', authMiddleware.ensureAuthenticated,settingsController.get_settings);






module.exports = router;

