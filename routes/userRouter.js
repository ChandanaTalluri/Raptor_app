var express = require('express');
var router = express.Router();
var axios = require('axios');
var userController = require('../controllers/userController');


router.get('/',userController.get_user);

router.get('/addUser', userController.get_add_user);
router.post('/addUser', userController.post_add_user);

router.get('/updateUser', userController.get_update_user);
router.post('/updateUser', userController.post_update_user);

router.get('/deleteUser', userController.get_delete_user);

module.exports = router;

