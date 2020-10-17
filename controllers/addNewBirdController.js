
exports.get_settings = function(req, res) {
    
        res.render('settings/settings');
     
}
exports.get_add_bird = function(req, res) {
    res.render('settings/addBird');
}

exports.post_add_bird = function(req, res) {
      
    let newBird = {
        speices: req.body.speices,
        nickName: req.body.nickName,
        status: req.body.status
    }

    // todo save these to a databse
    console.log(newBird);

    // what next?
    res.redirect('/birdSettings');
}
