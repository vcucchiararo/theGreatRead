const Book = require('../models/bookModel');
const axios = require('axios');

const googleApiPath = 'https://www.googleapis.com/books/v1/volumes?q=';
const authorApiPath = `${googleApiPath}inauthor:`;
const titleApiPath = `${googleApiPath}intitle:`;
const subjectApiPath = `${googleApiPath}subject:`;

function createBookModelList(items) {
    const bookList = [];
    items.forEach((book) => {
        const currentBook = {
            id: book.id || '',
            title: book.volumeInfo.title || '',
            author: book.volumeInfo.authors
                ? book.volumeInfo.authors[0] || ''
                : '',
            averageRating: book.volumeInfo.averageRating || '3',
            image: book.volumeInfo.imageLinks
                ? book.volumeInfo.imageLinks.thumbnail || ''
                : '',
            description: book.volumeInfo.description || '',
            editorial: book.volumeInfo.publisher || '',
            year: book.volumeInfo.publishedDate || '',
            isbn: book.volumeInfo.industryIdentifiers
                ? book.volumeInfo.industryIdentifiers[0].identifier || ''
                : '',
            genre: book.volumeInfo.categories
                ? book.volumeInfo.categories[0] || 'Fiction'
                : 'Fiction'
        };
        bookList.push(currentBook);
    });
    return bookList;
}

async function sendRequest(path) {
    let books = null;
    await axios
        .get(path)
        .then((response) => {
            if (response.data.items.length > 0) {
                const bookList = createBookModelList(response.data.items);
                books = bookList;
            }
        })
        .catch((error) => {
            console.log(error);
        });
    return books;
}

function booksController(Book) {
    async function get(req, res) {
        const { author, title, subject, id } = req.query;

        if (author) {
            const response = await sendRequest(`${authorApiPath}${author}`);
            if (response.length > 0) {
                res.status(200);
                return res.json(response);
            } else {
                console.log(response);
            }
        } else if (title) {
            const response = await sendRequest(`${titleApiPath}${title}`);
            if (response.length > 0) {
                res.status(200);
                return res.json(response);
            } else {
                console.log(response);
            }
        } else if (subject) {
            const response = await sendRequest(`${subjectApiPath}${subject}`);
            if (response.length > 0) {
                res.status(200);
                return res.json(response);
            } else {
                console.log(response);
            }
        }
    }

    return { get };
}
module.exports = booksController;
