
exports.get_settings = function(req, res) {
    
        res.render('settings/settings');
     
}
exports.get_add_animalHome = function(req, res) {
    res.render('settings/animals/animalHomePage');
}

exports.get_add_medicineHome = function(req, res) {
    res.render('settings/medicines/medicinesHomePage');
}

exports.get_foodType= function(req, res) {
    res.render('settings/foodType/foodType');
}
exports.get_add_animal = function(req, res) {
    res.render('settings/animals/addAnimal');
}
exports.get_add_medicine = function(req, res) {
    res.render('settings/medicines/addMedicins');
}

exports.get_update_animal = function(req, res) {
    res.render('settings/animals/updateAnimal');
}
exports.get_update_medicine = function(req, res) {
    res.render('settings/medicines/updateMedicins');
}
