const mongoose = require('mongoose');
const { Schema } = mongoose;

const userModel = new Schema({
    userName: { type: String },
    userEmail: { type: String },
    sub: { type: String },
    email: { type: String }
    // image: { type: String },
    // genre: [{ type: String }]
});

module.exports = mongoose.model('User', userModel);
