const mongoose = require('mongoose');
const bcrypt   = require('bcrypt-nodejs');

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique:true },
  password: { type: String, required: true },
  registerDate: { type: Date, default:Date.now},
  role: { type: String, required: true },
});

// generating a hash
userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checks if password is valid
userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model('User', userSchema);

//userSchema.set('toJSON', { virtuals: true });
//const User = mongoose.model('user', userSchema);
module.exports = User;