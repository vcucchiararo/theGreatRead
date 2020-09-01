const get = (req, res) => {
    if (req && req.book) {
        const { book } = req;
        res.json(book);
    } else {
        res.send('Bad parameters');
    }
};

const put = (req, res) => {
    const { book } = req;
    if (book && req.body.title) {
        book.title = req.body.title;
        book.save((error) => {
            if (error) {
                res.send(error);
            } else {
                res.json(book);
            }
        });
    }
};

const patch = (req, res) => {
    const { book } = req;

    if (book && req.body) {
        if (req.body._id) {
            delete req.body._id;
        }

        Object.entries(req.body).forEach((item) => {
            const key = item[0];
            const value = item[1];
            book[key] = value;
        });
        book.save((error) => {
            if (error) {
                res.send(error);
            }
            res.json(book);
        });
    } else {
        res.send('Request must include a book and a body');
    }
};

const deleter = (req, res) => {
    const { book } = req;

    if (book) {
        book.remove((error) => {
            if (error) {
                res.send(error);
            }
            res.sendStatus(204);
        });
    } else {
        res.send('Request must include a book');
    }
};
