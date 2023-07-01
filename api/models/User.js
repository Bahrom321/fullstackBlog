const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const UserSchema = new Schema({
  username: {type: String, required: true, min: 4, unique: true},
  password: {type: String, required: true},
});

const UserModel = model('User', UserSchema);

module.exports = UserModel;
// mongoose.connect('mongodb+srv://bahromkarimov220:Vdb47KLLJKufnJB1@cluster0.vatje7g.mongodb.net/test');