const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const feedingSchema = new Schema({
    animalSpecies: { type: String, required: true },
    animalNickName: { type: String, required: true },
    food: { type: String, required: true },
    medicine: { type: String, required: true },
    goalWeightOfAnimal: { type: String, required: true },
    actualWeightOfAnimal: { type: String, required: true },
    amountOfFoodFed: { type: String, required: true },
    leftoverFood: { type: String, required: true },
    comments: { type: String, required: true },
    weatherConditions: { type: String, required: true },
    dateTime: { type: String, required: true },
    keeperName: { type: String, required: true },
   });

feedingSchema.set('toJSON', { virtuals: true });
const Feeding = mongoose.model('feeding', feedingSchema);
module.exports = Feeding;