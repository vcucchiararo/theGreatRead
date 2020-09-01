const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookModel = new Schema({
    id: { type: Number },
    product: {
        type: { type: String },
        title: { type: String },
        author: { type: String },
        price: { type: Number },
        rating: { type: Number },
        cover: { type: String },
        description: { type: String },
        editorial: { type: String },
        year: { type: String },
        isbn: { type: Number },
        genre: { type: String }
    }
});

module.exports = mongoose.model('Book', bookModel);
