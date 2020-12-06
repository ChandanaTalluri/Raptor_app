const User = require('../models/user.model');


exports.get_user = function (req, res) {
    User.find({}, function (err, users) {
        if (err) {
            console.error(err);
        } else {
            res.render('user/userHomePage', { data: users });
        }
    })

}
exports.get_add_user = function (req, res) {
    res.render('user/addUser', { errormessage: '' });
}

exports.post_add_user = function (req, res) {

    let users = new User();
    users.email = req.body.email;
    users.firstName = req.body.firstName;
    users.lastName = req.body.lastName;
    users.password = users.generateHash(req.body.password);
    users.role = req.body.role;
    console.log(users);
    users.save(function (err) {
        if (err) {
            // handle error
            User.findOne({ 'email': req.body.email }, function (err, user) {
                if (user) {
                    res.render('user/addUser', { errormessage: 'User already exists' });
                }else{
                    res.render('user/addUser', { errormessage: 'Enter valid data' });
                }
            });
            console.log(err);
        } else {
            // saved!
            res.redirect('/user')
        }
    });

}



exports.get_update_user = function (req, res) {

    User.findOne({ _id: req.query.id }, function (err, users) {
        if (err) {
            // handle error
        } else {
            console.log(User);
            res.render('user/updateUser', { data: users,errormessage:'' });
        }
    });
}
exports.post_update_user = function (req, res) {


    const updateUser = {
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        role: req.body.role
    };
    let user = new User();
    if (req.body.password) {
        updateUser.password = user.generateHash(req.body.password);
    }
    
        User.findOneAndUpdate({ _id: req.body.id }, updateUser, function (err, data) {
            
            if (err) {
                res.render('user/updateUser', {data:updateUser, errormessage: 'Multiple users exists with same Email ID' });
                console.log(err);
            } else {
                res.redirect('/user');
            }
        });    
};

exports.get_delete_user = function (req, res) {
    User.findOneAndDelete({ _id: req.query.id }, function (err) {
        if (err) {
            // handle error
            console.log(err);
        } else {
            res.redirect('/user');
        }
    });
};

exports.get_update_password = async function (req, res) {

    res.render('user/changeUserPassword');
};


exports.post_update_password = async function (req, res) {
    console.log(req.user._id);
    const userInfo = await User.findOne({ _id: req.user._id });
    let oldPassword = req.body.oldPassword;
    let newUser = new User();

    // generate a new pw hash
    let newHash = newUser.generateHash(req.body.newPassword);

    try {
        await User.findOneAndUpdate({ _id: req.user._id }, { password: newHash });
    }
    catch (err) {
        // could probably handle a potential error better
        console.log(err);
    }

    res.redirect('/user');

};
