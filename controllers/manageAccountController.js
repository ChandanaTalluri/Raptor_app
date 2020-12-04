
const User = require('../models/user.model');

exports.get_account = async function(req, res) {
    console.log(req.user._id );
    const user = await User.findOne({ _id: req.user._id });
    res.render('manageAccount/manageAccount',{data:user});
       
}

exports.post_account = function (req, res) {
    res.redirect('manageAccount/manageAccount');
    
}

exports.get_password = async function(req, res) {
    console.log(req.user._id );
    const user = await User.findOne({ _id: req.user._id });
    res.render('manageAccount/changePassword');
}

exports.post_password = async function(req, res) {
    console.log(req.user._id );
    const userInfo = await User.findOne({ _id: req.user._id });
    let oldPassword = req.body.oldPassword;
  //  let newUser = new User();
    
    res.render('/manageAccount');
}

exports.get_updateAccount = async function(req, res) {
    console.log(req.user._id );
    const user = await User.findOne({ _id: req.user._id });
    console.log(user);
    res.render('manageAccount/updateAccountDetails',{data:user});
}

exports.post_updateAccount = async function(req, res) {
    const userInfo = await User.findOne({ _id: req.user._id });
    const updateUserAccount = {
        email:req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        //password:userInfo.password,
        role: userInfo.role,
    };

    console.log(updateUserAccount);
    User.findOneAndUpdate({ _id: req.body.id }, updateUserAccount, function (err, data) {
        if (err) {
            // handle error
            console.log(err);
        } else {
            res.redirect('/manageAccount');
        }
    });
    
}




