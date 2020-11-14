var express = require('express');
var router = express.Router();
var feedingController = require('../controllers/feedingController');

const authMiddleware = require('../middleware/ensureauthenticated');

router.get('/',authMiddleware.ensureAuthenticated, feedingController.get_feeding);

module.exports = router;

