const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const medicinesSchema = new Schema({
  name: { type: String, required: true },
});

medicinesSchema.set('toJSON', { virtuals: true });
const medicines = mongoose.model('medicines', medicinesSchema);
module.exports = medicines;