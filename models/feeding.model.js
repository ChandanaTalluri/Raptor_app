const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const feedingSchema = new Schema({
    animalSpecies: { type: String, required: true },
    animalNickName: { type: String, required: true },
    food: { type: String, required: true },
    medicine: { type: String, required: false },
    goalWeightOfAnimal: { type: Number, required: false },
    actualWeightOfAnimal: { type: Number, required: false },
    amountOfFoodFed: { type: Number, required: true },
    leftoverFood: { type: Number, required: false },
    comments: { type: String, required: false },
    weatherConditions: { type: String, required: false },
    dateTime: { type: Date, required: true ,default: Date.now},
    keeperName: { type: String, required: true },
   });

feedingSchema.set('toJSON', { virtuals: true });
const Feeding = mongoose.model('feeding', feedingSchema);
module.exports = Feeding;