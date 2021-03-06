const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const foodTypeSchema = new Schema({
  name: { type: String, required: true },
});

foodTypeSchema.set('toJSON', { virtuals: true });
const FoodType = mongoose.model('foodType', foodTypeSchema);
module.exports = FoodType;