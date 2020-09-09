const mongoose = require('mongoose');
const { Schema } = mongoose;

const userModel = new Schema({
    sub: { type: String, require: true },
    userEmail: { type: String, require: true },
    userNickname: { type: String, require: true },
    favoriteBooks: [{ bookId: { type: String, require: true, unique: true } }]
});

module.exports = mongoose.model('User', userModel);
