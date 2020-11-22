var express = require('express');
var router = express.Router();
var axios = require('axios');
var feedingController = require('../controllers/feedingController');
const authMiddleware = require('../middleware/ensureauthenticated');

router.get('/',authMiddleware.ensureAuthenticated,feedingController.get_feedings);
router.get('/export',authMiddleware.ensureAuthenticated,feedingController.get_export);

router.get('/addFeedings',authMiddleware.ensureAuthenticated, feedingController.get_add_feedings);
router.post('/addFeedings',authMiddleware.ensureAuthenticated, feedingController.post_add_feedings);

router.get('/updateFeedings',authMiddleware.ensureAuthenticated, feedingController.get_update_feedings);
router.post('/updateFeedings',authMiddleware.ensureAuthenticated, feedingController.post_update_feedings);

router.get('/deleteFeedings',authMiddleware.ensureAuthenticated, feedingController.get_delete_feedings);

module.exports = router;

