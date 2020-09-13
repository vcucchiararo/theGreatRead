const express = requier('express');
const debug = require('debug')('app:finderRoutes');

const finderRoutes = express.Router();

function router(nav) {
    finderRoutes.route('/').post((req, res) => {});
}
