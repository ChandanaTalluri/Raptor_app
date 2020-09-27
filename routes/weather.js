const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
    let weather = {
        Temp: 90.5,

        Unit: 'fahrenheit',

        Cloudy: false,

        PrecipitationChance: 0
    }
    res.send(weather);
  });




module.exports = router;
