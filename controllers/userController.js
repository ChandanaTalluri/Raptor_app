const User = require('../models/user.model');


exports.get_user = function(req, res) {
    User.find({}, function (err, users) {
        if (err) {
            console.error(err);
        } else {
            res.render('user/userHomePage', { data: users });
        }
    })
    
}
exports.get_add_user= function(req, res) {
    res.render('user/addUser');
}

exports.post_add_user = function (req, res) {

    let users = new User({
        email:req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password,
        role:req.body.role
        
    });
    console.log(users);
    users.save(function (err) {
        if (err) {
            // handle error
            console.log(err);
        } else {
            // saved!
            res.redirect('/user')
        }
    });
}



exports.get_update_user= function(req, res) {

    User.findOne({ _id: req.query.id }, function (err, users) {
        if (err) {
            // handle error
        } else {
            console.log(User);
            res.render('user/updateUser', { data: users });
        }
    });
}
exports.post_update_user = function (req, res) {
    

    const updateUser = {
        email:req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        role:req.body.role
    };

    User.findOneAndUpdate({ _id: req.body.id }, updateUser, function (err, data) {
        if (err) {
            // handle error
            console.log(err);
        } else {
            res.redirect('/user');
        }
    });
};

exports.get_delete_user = function(req, res) {
    User.findOneAndDelete({_id: req.query.id}, function(err) {
      if (err) {
        // handle error
        console.log(err);
      } else {
        res.redirect('/user');
      }
    });
  };




