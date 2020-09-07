const express = require('express');
const debug = require('debug')('app:userRoutes');

const userRouteController = require('../controllers/userRouteController');
const usersRouteController = require('../controllers/usersRouteController');

const userRouter = express.Router();

function routes(User) {
    const controller = userRouteController(User);
    userRouter.route('/').post(controller.post);

    return userRouter;
}

module.exports = routes;
