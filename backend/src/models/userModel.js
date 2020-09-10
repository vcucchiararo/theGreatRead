const mongoose = require('mongoose');
const { Schema } = mongoose;

const userModel = new Schema({
    sub: { type: String, require: true },
    userEmail: { type: String, require: true },
    userNickname: { type: String, require: true },
    favoriteBooks: [String]
});

module.exports = mongoose.model('User', userModel);
