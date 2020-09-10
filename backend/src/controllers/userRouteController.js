const debug = require('debug')('app:userRouteController');

const User = require('../models/userModel');

const put = (req, res) => {
    const { user } = req;
    const { bookId } = req.body;
    if (user) {
        console.log('----->req.body.bookId', bookId);
        user.favoriteBooks.push(bookId);
        console.log('-+-+-+-+->new array', user.favoriteBooks);

        user.save((error) => {
            if (error) {
                console.log('=c============', error);
                res.status(404);
                res.send(error);
            } else {
                res.status(200);
                res.json(user);
            }
        });
    } else {
        console.log('=cc============', 'This user does not exist');

        res.status(404);
        res.send('This user does not exist');
    }
};

const get = (req, res) => {
    const { id } = req.params;
    const query = {
        sub: id
    };
    debug(query);
    User.findOne(query, (error, user) => {
        if (error) {
            res.status(404);
            return res.send(error);
        } else {
            res.status(200);
            return res.json(user);
        }
    });
};

module.exports = { put, get };
