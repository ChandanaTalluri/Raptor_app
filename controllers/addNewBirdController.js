
exports.get_settings = function(req, res) {
    
        res.render('settings/settings');
     
}
exports.get_add_animal = function(req, res) {
    res.render('settings/aniamls/animalHomePage');
}

exports.get_add_medicine = function(req, res) {
    res.render('settings/medicines/medicinesHomePage');
}
