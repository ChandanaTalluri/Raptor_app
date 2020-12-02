
const User = require('../models/user.model');

exports.get_account = function(req, res) {
    res.render('manageAccount/manageAccount');
       
}

exports.post_account = function (req, res) {
    res.redirect('manageAccount/manageAccount');
    
}

exports.get_password = function(req, res) {
    res.render('manageAccount/changePassword');
}

exports.post_password = function(req, res) {
    res.render('manageAccount/changePassword');
}

exports.get_updateAccount = function(req, res) {
    res.render('manageAccount/updateAccountDetails');
}

exports.post_updateAccount = function(req, res) {
    res.render('manageAccount/updateAccountDetails');
}




