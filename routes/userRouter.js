var express = require('express');
var router = express.Router();
var axios = require('axios');
var userController = require('../controllers/userController');
const authMiddleware = require('../middleware/ensureauthenticated');

router.get('/',userController.get_user);

router.get('/addUser',authMiddleware.ensureAuthenticated, userController.get_add_user);
router.post('/addUser',authMiddleware.ensureAuthenticated, userController.post_add_user);

router.get('/updateUser',authMiddleware.ensureAuthenticated, userController.get_update_user);
router.post('/updateUser',authMiddleware.ensureAuthenticated, userController.post_update_user);

router.get('/deleteUser',authMiddleware.ensureAuthenticated, userController.get_delete_user);

module.exports = router;

