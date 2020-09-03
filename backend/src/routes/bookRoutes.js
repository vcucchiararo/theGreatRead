const express = require('express');
const debug = require('debug')('app:bookRoutes');

const bookRouteController = require('../controllers/bookRouteController');
const booksRouteController = require('../controllers/booksRouteController');

const bookRouter = express.Router();

function routes(Book) {
    const controller = booksRouteController(Book);
    bookRouter.route('/').get(controller.get);

    // bookRouter
    //     .route('/:bookId')
    //     .all((req, res, next) => {
    //         Book.findById(req.params.bookId, (error, book) => {
    //             if (error) {
    //                 res.send(error);
    //             }
    //             if (book) {
    //                 req.book = book;
    //                 next();
    //             }
    //         });
    //     })
    //     .get(bookRouteController.get)
    //     .put(bookRouteController.put)
    //     .patch(bookRouteController.patch)
    //     .delete(bookRouteController.deleter);

    return bookRouter;
}

module.exports = routes;
