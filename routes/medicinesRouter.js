var express = require('express');
var router = express.Router();
var axios = require('axios');
var medicinesController = require('../controllers/medicinesController');
const authMiddleware = require('../middleware/ensureauthenticated');

router.get('/',authMiddleware.ensureAuthenticated,medicinesController.get_medicines);

router.get('/addMedicines',authMiddleware.ensureAuthenticated, medicinesController.get_add_medicines);
router.post('/addMedicines',authMiddleware.ensureAuthenticated, medicinesController.post_add_medicines);

router.get('/updateMedicines',authMiddleware.ensureAuthenticated, medicinesController.get_update_medicines);
router.post('/updateMedicines',authMiddleware.ensureAuthenticated, medicinesController.post_update_medicines);

router.get('/deleteMedicines',authMiddleware.ensureAuthenticated, medicinesController.get_delete_medicines);

module.exports = router;

