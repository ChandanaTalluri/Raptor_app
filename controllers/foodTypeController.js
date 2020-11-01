const FoodType = require('../models/foodType.model');

exports.get_add_foodType= function(req, res) {
    res.render('foodType/addFoodType');
   }
exports.get_foodType = function(req, res) {
    FoodType.find({}, function (err, foodType) {
        if (err) {
            console.error(err);
        } else {
            res.render('foodType/foodTypeHomePage', { data: foodType });
        }
    })
}
exports.post_add_foodType = function (req, res) {


    let foodType = new FoodType({
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
    FoodType.findOne({ _id: req.query.id }, function (err, foodType) {
        if (err) {
            // handle error
        } else {
            console.log(FoodType);
            res.render('foodType/updateFoodType', { data: foodType });
        }
    });
}
exports.post_update_foodType = function (req, res) {
    

    const updateFoodType = {
            name: req.body.name
    };

    FoodType.findOneAndUpdate({ _id: req.body.id }, updateFoodType, function (err, data) {
        if (err) {
            // handle error
            console.log(err);
        } else {
            res.redirect('/foodType');
        }
    });
};

exports.get_delete_foodType = function(req, res) {
    FoodType.findOneAndDelete({_id: req.query.id}, function(err) {
      if (err) {
        // handle error
        console.log(err);
      } else {
        res.redirect('/foodType');
      }
    });
  };




