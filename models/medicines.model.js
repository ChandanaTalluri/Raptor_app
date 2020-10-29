const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const medicinesSchema = new Schema({
  name: { type: String, required: true },
});

medicinesSchema.set('toJSON', { virtuals: true });
const Medicines = mongoose.model('medicines', medicinesSchema);
module.exports = Medicines;