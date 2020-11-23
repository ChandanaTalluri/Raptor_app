var express = require('express');
var router = express.Router();
var axios = require('axios');
var passwordController = require('../controllers/passwordController');
const authMiddleware = require('../middleware/ensureauthenticated');


router.get('/',authMiddleware.ensureAuthenticated, passwordController.get_password);
router.post('/',authMiddleware.ensureAuthenticated, passwordController.post_password);


module.exports = router;

