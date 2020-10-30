const Animal = require('../models/animal.model');


exports.get_animalHome = function(req, res) {
    Animal.find({}, function (err, animals) {
        if (err) {
            console.error(err);
        } else {
            res.render('animals/animalHomePage', { data: animals });
        }
    })
}
exports.get_add_animal = function(req, res) {
    res.render('animals/addAnimal');
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
    console.log(newAnimal);
    newAnimal.save(function (err) {
        if (err) {
            // handle error
            console.log(err);
        } else {
            // saved!
            res.redirect('/animals')
        }
    });
}


exports.get_update_animal = function(req, res) {
    Animal.findOne({ _id: req.query.id }, function (err, animal) {
        if (err) {
            // handle error
        } else {
            console.log(animal);
            res.render('animals/updateAnimal', { data: animal });
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
            res.redirect('/animals');
        }
    });
};

exports.get_delete_animal = function(req, res) {
    Animal.findOneAndDelete({_id: req.query.id}, function(err) {
      if (err) {
        // handle error
        console.log(err);
      } else {
        res.redirect('/animals');
      }
    });
  };




