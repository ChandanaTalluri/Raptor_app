const Feedings = require('../models/feeding.model');
const Animal = require('../models/animal.model');
const FoodType = require('../models/foodType.model');
const Medicines = require('../models/medicines.model');
const excel = require('exceljs');


exports.post_Export = async function (req, res) {
        let fileType = req.body.fileType;
        let fromDate = req.body.fromDate;
        console.log("From Date-  " + fromDate);
        let toDate = req.body.toDate;
        console.log("To Date-  " + toDate);
        let allData = req.body.allData;
        console.log("all Data-  " + allData);
        let feedings = "";
        if(allData == 'on') {
                feedings = await Feedings.find({}).sort({ dateTime: 'desc' });
        }
        else if (fromDate != null && toDate != null) {
                feedings = await Feedings.find({
                        dateTime: {
                                $gte: new Date(new Date(fromDate).setHours(00, 00, 00)),
                                $lt: new Date(new Date(toDate).setHours(23, 59, 59)),
                        },
                });
        } 
        
        

        if (fileType == "csvFile") {

                let csv = '';
                csv = "Date Time" + ','
                        + "Animal Species" + ','
                        + "Animal NickName" + ','
                        + " Food" + ','
                        + "Medicine" + ','
                        + "Goal Weight of Animal" + ','
                        + "Actual Weight of Animal" + ','
                        + "Amount of Food Fed" + ','
                        + "Left Over of Food " + ','
                        + "Weather Conditions" + ','
                        + "Keeper Name" + ','
                        + "Comments" + '\r\n';


                feedings.forEach((feeding) => {
                        csv += feeding.dateTime.toLocaleDateString() + ','
                                + feeding.animalSpecies + ','
                                + feeding.animalNickName + ','
                                + feeding.food + ','
                                + feeding.medicine + ','
                                + feeding.goalWeightOfAnimal + ','
                                + feeding.actualWeightOfAnimal + ','
                                + feeding.amountOfFoodFed + ','
                                + feeding.leftoverFood + ','
                                + feeding.weatherConditions + ','
                                + feeding.keeperName + ','
                                + feeding.comments + '\r\n';
                });
                res.header('Content-Type', 'text/csv');
                res.attachment('feedings.csv');
                return res.send(csv);
        }

        if (fileType == "excelFile") {

                const workbook = new excel.Workbook();
                const worksheet = workbook.addWorksheet('Feedings');
                worksheet.columns = [
                        { header: 'Date', key: 'dateTime', width: 20 },
                        { header: 'Species', key: 'animalSpecies', width: 10 },
                        { header: 'Nickname', key: 'animalNickName', width: 10 },
                        { header: 'Food', key: 'food', width: 10 },
                        { header: 'Medicine', key: 'medicine', width: 10 },
                        { header: 'Goal Weight', key: 'goalWeightOfAnimal', width: 10 },
                        { header: 'Actual Weight', key: 'actualWeightOfAnimal', width: 10 },
                        { header: 'Amount Fed', key: 'amountOfFoodFed', width: 10 },
                        { header: 'Leftover Food', key: 'leftoverFood', width: 10 },
                        { header: 'Weather Conditions', key: 'weatherConditions', width: 20 },
                        { header: 'Comments', key: 'comments', width: 50 },
                        { header: 'Keeper Name', key: 'keeperName', width: 50 },
                ];

                worksheet.addRows(feedings);

                res.setHeader(
                        'Content-Type',
                        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                );
                res.setHeader(
                        'Content-Disposition',
                        'attachment; filename=' + 'feedings.xlsx',
                );
                return workbook.xlsx.write(res).then(function () {
                        res.status(200).end();
                });
        }

}


exports.get_feedings = async function (req, res) {
        const feedings = await Feedings.find({}).sort({ dateTime: 'desc' });
        res.render('feeding/feeding', { data: feedings });

}

exports.get_add_feedings = async function (req, res) {
        const animals = await Animal.find({ enabled: true });
        const foods = await FoodType.find({});
        const medicines = await Medicines.find({});
        res.render('feeding/addFeedings', { animals: animals, foods: foods, medicines: medicines });
}

exports.post_add_feedings = async function (req, res) {

        const animal = await Animal.findOne({ _id: req.body.animalId });

        let feedings = new Feedings({

                animalSpecies: animal.species,
                animalNickName: animal.nickName,
                food: req.body.food,
                medicine: req.body.medicine,
                goalWeightOfAnimal: req.body.goalWeightOfAnimal,
                actualWeightOfAnimal: req.body.actualWeightOfAnimal,
                amountOfFoodFed: req.body.amountOfFoodFed,
                leftoverFood: req.body.leftoverFood,
                comments: req.body.comments,
                weatherConditions: req.body.weatherConditions,
                dateTime: req.body.dateTime,
                keeperName: req.body.keeperName

        });
        console.log(feedings);
        feedings.save(function (err) {
                if (err) {
                        // handle error
                        console.log(err);
                } else {
                        // saved!
                        res.redirect('/feeding')
                }
        });
}



exports.get_update_feedings = async function (req, res) {
        const animals = await Animal.find({ enabled: true });
        const foods = await FoodType.find({});
        const medicines = await Medicines.find({});

        Feedings.findOne({ _id: req.query.id }, function (err, feedings) {
                if (err) {
                        // handle error
                } else {
                        console.log(feedings);
                        res.render('feeding/updateFeedings', { data: feedings, animals: animals, foods: foods, medicines: medicines });
                }
        });
}
exports.post_update_feedings = async function (req, res) {
        const animal = await Animal.findOne({ _id: req.body.animalId });

        const updateFeedings = {

                animalSpecies: animal.species,
                animalNickName: animal.nickName,
                food: req.body.food,
                medicine: req.body.medicine,
                goalWeightOfAnimal: req.body.goalWeightOfAnimal,
                actualWeightOfAnimal: req.body.actualWeightOfAnimal,
                amountOfFoodFed: req.body.amountOfFoodFed,
                leftoverFood: req.body.leftoverFood,
                comments: req.body.comments,
                weatherConditions: req.body.weatherConditions,
                dateTime: req.body.dateTime,
                keeperName: req.body.keeperName
        };

        Feedings.findOneAndUpdate({ _id: req.body.id }, updateFeedings, function (err, data) {
                if (err) {
                        // handle error
                        console.log(err);
                } else {
                        res.redirect('/feeding');
                }
        });
};

exports.get_delete_feedings = function (req, res) {
        Feedings.findOneAndDelete({ _id: req.query.id }, function (err) {
                if (err) {
                        // handle error
                        console.log(err);
                } else {
                        res.redirect('/feeding');
                }
        });
};