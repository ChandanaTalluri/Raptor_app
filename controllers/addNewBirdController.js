const Animal = require('../models/animal');

exports.get_settings = function(req, res) {
    
        res.render('settings/settings');
     
}
exports.get_add_animalHome = function(req, res) {
    Animal.find({}, function (err, animals) {
        if (err) {
            console.error(err);
        } else {
            res.render('settings/animals/animalHomePage', { data: animals });
        }
    })
}
exports.get_add_animal = function(req, res) {
    res.render('settings/animals/addAnimal');
}
exports.post_create_animal = function (req, res) {

    let enabled = false;
    if (req.body.enabled == 'on') {
        enabled = true;
    }

    let newAnimal = new Animal({
        species: req.body.species,
        nickName: req.body.nickName,
        enabled: enabled,
    });

    newAnimal.save(function (err) {
        if (err) {
            // handle error
            console.log(err);
        } else {
            // saved!
            res.redirect('/animalHomePage')
        }
    });
}

exports.get_add_medicineHome = function(req, res) {
    res.render('settings/medicines/medicinesHomePage');
}

exports.get_foodType= function(req, res) {
    res.render('settings/foodType/foodType');
}

exports.get_add_medicine = function(req, res) {
    res.render('settings/medicines/addMedicins');
}

exports.get_update_animal = function(req, res) {
    Animal.findOne({ _id: req.query.id }, function (err, animal) {
        if (err) {
            // handle error
        } else {
            console.log(animal);
            res.render('settings/animals/updateAnimal', { data: animal });
        }
    });
}
exports.post_update_animal = function (req, res) {
    let enabled = false;
    if (req.body.enabled == 'on') {
        enabled = true;
    }

    const updateData = {
        enabled: enabled,
        nickName: req.body.nickName,
        species: req.body.species,
    };

    Animal.findOneAndUpdate({ _id: req.body.id }, updateData, function (err, data) {
        if (err) {
            // handle error
            console.log(err);
        } else {
            res.redirect('/animalHomePage');
        }
    });
};

exports.get_delete_animal = function(req, res) {
    Animal.findOneAndDelete({_id: req.query.id}, function(err) {
      if (err) {
        // handle error
        console.log(err);
      } else {
        res.redirect('/animalHomePage');
      }
    });
  };
exports.get_update_medicine = function(req, res) {
    res.render('settings/medicines/updateMedicins');
}

exports.get_delete_animal = function(req, res) {
    res.render('settings/animals/deleteAnimal');
}
exports.post_delete_animal = function(req, res) {
    res.render('settings/animals/updateAnimal');
}
