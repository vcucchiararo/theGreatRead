const mongoose = require('mongoose');
const { Schema } = mongoose;

const userModel = new Schema({
    sub: { type: String },
    userEmail: { type: String },
    userNickname: { type: String },
    favoriteBooks: [Array]
});

module.exports = mongoose.model('User', userModel);
