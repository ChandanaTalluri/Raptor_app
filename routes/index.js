let passport = require('passport');
const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index',{ message: req.flash('loginMessage') });
});



router.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
});



router.post('/', passport.authenticate('local-login', {
    successRedirect: '/feeding', //redirect to the home page
    failureRedirect: '/', // redirect back to the signup page if there is an error
    failureFlash: true // allow flash messages
}));



module.exports = router;
