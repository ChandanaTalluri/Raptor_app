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
    res.render('manageAccount/changePassword',{errormessage:''});
}

exports.post_password = async function(req, res) {
    console.log(req.user._id );
    const userInfo = await User.findOne({ _id: req.user._id });
    let oldPassword = req.body.oldPassword;
    let newUser = new User();
  
    // use the valid password method on the user to compare the password they entered to what's in the database
    if (userInfo.validPassword(oldPassword)) {

        // generate a new pw hash
        let newHash = newUser.generateHash(req.body.newPassword);

        try {
            await User.findOneAndUpdate({_id:req.user._id}, {password: newHash});
        }
        catch (err) {
            // could probably handle a potential error better
            console.log(err);
        }

        res.redirect('/manageAccount');
    }
    else {
        res.render('manageAccount/changePassword',{errormessage:'The old pasword you entered does not match your current record'});
        // could probably direct to a nicely formatted message here letting the user know this
       // res.send('The old pasword you entered does not match your current record');
    }
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




