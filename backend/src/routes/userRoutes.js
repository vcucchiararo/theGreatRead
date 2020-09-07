const express = require('express');
const debug = require('debug')('app:userRoutes');

const usersRouteController = require('../controllers/usersRouteController');

const userRouter = express.Router();

function routes(User) {
    userRouter.route('/').post(usersRouteController.post);

    return userRouter;
}

module.exports = routes;
