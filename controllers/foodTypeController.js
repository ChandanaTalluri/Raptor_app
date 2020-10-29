const Animal = require('../models/foodType.model');

exports.get_add_foodType= function(req, res) {
    Animal.find({}, function (err, foodType) {
        if (err) {
            console.error(err);
        } else {
            res.render('addFoodType', { data: foodType });
        }
    })
}
exports.get_foodType = function(req, res) {
    res.render('foodType/foodTypeHomePage');
}
exports.post_add_foodType = function (req, res) {

    let enabled = false;
    if (req.body.enabled == 'on') {
        enabled = true;
    }

    let foodType = new Animal({
        name: req.body.name,
        
    });
    console.log(foodType);
    foodType.save(function (err) {
        if (err) {
            // handle error
            console.log(err);
        } else {
            // saved!
            res.redirect('/foodType')
        }
    });
}



exports.get_update_foodType= function(req, res) {
    Animal.findOne({ _id: req.query.id }, function (err, foodType) {
        if (err) {
            // handle error
        } else {
            console.log(animal);
            res.render('foodTypeHomePage', { data: foodType });
        }
    });
}
exports.post_update_foodType = function (req, res) {
    let enabled = false;
    if (req.body.enabled == 'on') {
        enabled = true;
    }

    const updateFoodType = {
            name: req.body.name
    };

    Animal.findOneAndUpdate({ _id: req.body.id }, updateFoodType, function (err, data) {
        if (err) {
            // handle error
            console.log(err);
        } else {
            res.redirect('foodTypeHomePage');
        }
    });
};

exports.get_delete_foodType = function(req, res) {
    Animal.findOneAndDelete({_id: req.query.id}, function(err) {
      if (err) {
        // handle error
        console.log(err);
      } else {
        res.redirect('foodTypeHomePage');
      }
    });
  };




