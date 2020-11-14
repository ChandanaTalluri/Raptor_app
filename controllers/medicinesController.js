const Medicines = require('../models/medicines.model');


exports.get_medicines = function(req, res) {
    Medicines.find({}, function (err, medicines) {
        if (err) {
            console.error(err);
        } else {
            res.render('medicines/medicinesHomePage', { data: medicines });
        }
    })
    
}
exports.get_add_medicines= function(req, res) {
    res.render('medicines/addMedicines');
}

exports.post_add_medicines = function (req, res) {

    let medicines = new Medicines({
        name: req.body.name,
        
    });
    console.log(medicines);
    medicines.save(function (err) {
        if (err) {
            // handle error
            console.log(err);
        } else {
            // saved!
            res.redirect('/medicines')
        }
    });
}



exports.get_update_medicines= function(req, res) {

    Medicines.findOne({ _id: req.query.id }, function (err, medicines) {
        if (err) {
            // handle error
        } else {
            console.log(Medicines);
            res.render('medicines/updateMedicines', { data: medicines });
        }
    });
}
exports.post_update_medicines = function (req, res) {
    

    const updatemedicines = {
            name: req.body.name
    };

    Medicines.findOneAndUpdate({ _id: req.body.id }, updatemedicines, function (err, data) {
        if (err) {
            // handle error
            console.log(err);
        } else {
            res.redirect('/medicines');
        }
    });
};

exports.get_delete_medicines = function(req, res) {
    Medicines.findOneAndDelete({_id: req.query.id}, function(err) {
      if (err) {
        // handle error
        console.log(err);
      } else {
        res.redirect('/medicines');
      }
    });
  };