let passport = require('passport');
const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index',{ message: req.flash('loginMessage') });
});


router.get('/signUpPage', function (req, res) {
    res.render('../views/signUpPage',
        { message: req.flash('signupMessage') });
});

router.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
});

router.post('/signUpPage', passport.authenticate('local-signup', {
    successRedirect: '/homepage', //redirect to the secure home page
    failureRedirect: '/signUpPage', // redirect back to the signup page if there is an error
    failureFlash: true // allow flash messages
}));

router.post('/', passport.authenticate('local-login', {
    successRedirect: '/homepage', //redirect to the home page
    failureRedirect: '/', // redirect back to the signup page if there is an error
    failureFlash: true // allow flash messages
}));



module.exports = router;
