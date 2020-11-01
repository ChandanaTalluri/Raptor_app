var express = require('express');
var router = express.Router();
var axios = require('axios');
var medicinesController = require('../controllers/medicinesController');


router.get('/',medicinesController.get_medicines);

router.get('/addMedicines', medicinesController.get_add_medicines);
router.post('/addMedicines', medicinesController.post_add_medicines);

router.get('/updateMedicines', medicinesController.get_update_medicines);
router.post('/updateMedicines', medicinesController.post_update_medicines);

router.get('/deleteMedicines', medicinesController.get_delete_medicines);

module.exports = router;

