const { mongoose } = require('../../config');
const mongoosePaginate = require('mongoose-paginate');

let UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  file: String,
});

UserSchema.plugin(mongoosePaginate);
const User = mongoose.model('User', UserSchema);

module.exports = User;