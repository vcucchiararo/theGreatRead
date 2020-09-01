const Book = require('../models/bookModel');

function booksController(Book) {
    function post(req, res) {
        const book = new Book(req.body);
        if (!req.body.title) {
            res.status(400);
            return res.send('Title is required');
        } else {
            book.save();
            res.status(201);
            return res.json(book);
        }
    }
    function get(req, res) {
        const query = {};

        if (req && req.query && req.query.id) {
            query.id = req.query.id;
        }

        Book.find(query, (error, books) => {
            if (error) {
                res.status(400);
                res.send(error);
            } else {
                res.status(200);
                res.json(books);
            }
        });
    }

    return { get, post };
}
module.exports = booksController;
