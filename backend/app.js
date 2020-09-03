const express = require('express');
const debug = require('debug')('app');
// const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;
const Book = require('./src/models/bookModel');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// const db = mongoose.connect('mongodb://localhost/greatRead');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('My server works...');
});

const bookRoutes = require('./src/routes/bookRoutes')(Book);
app.use('/api/books', bookRoutes);

app.listen(port, () => debug(`Running on port ${port} `));
