

exports.get_password = function(req, res) {
    res.render('changePassword');
       
}

exports.post_password = function (req, res) {
    res.redirect('changePassword');
    
}







