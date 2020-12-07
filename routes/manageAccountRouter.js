var express = require('express');
var router = express.Router();
var axios = require('axios');
var passwordController = require('../controllers/manageAccountController');
const authMiddleware = require('../middleware/ensureauthenticated');


router.get('/',authMiddleware.ensureAuthenticated, passwordController.get_account);
router.post('/',authMiddleware.ensureAuthenticated, passwordController.post_account);

router.get('/changePassword',authMiddleware.ensureAuthenticated, passwordController.get_password);
router.post('/changePassword',authMiddleware.ensureAuthenticated, passwordController.post_password);

router.get('/updateAccountDetails',authMiddleware.ensureAuthenticated, passwordController.get_updateAccount);
router.post('/updateAccountDetails',authMiddleware.ensureAuthenticated, passwordController.post_updateAccount);


module.exports = router;

