import React, { useEffect, useState } from 'react';
import listStore from '../../stores/listStore';
import { loadBookList } from '../../actions/listActions';
import BookDetailItem from './BookDetailItem';

function BookDetail(props) {
    const [bookList, setBookList] = useState(listStore.getBookList());
    const [bookId, setBookId] = useState(null);
    const [bookTitle, setBookTitle] = useState('');
    const [bookAuthor, setBookAuthor] = useState('');
    const [bookRating, setBookRating] = useState(0);
    const [bookCover, setBookCover] = useState('');
    const [bookDescription, setBookDescription] = useState('');
    const [bookGenre, setBookGenre] = useState('');
    const [bookYear, setBookYear] = useState(0);
    const [bookEditorial, setBookEditorial] = useState('');
    const [bookIsbn, setBookIsbn] = useState(0);

    useEffect(() => {
        listStore.addChangeListener(onChange);
        const bookId = +props.match.params.bookId;
        if (bookList.length === 0) {
            loadBookList();
        } else if (bookId) {
            const book = listStore.getBookById(bookId);

            if (book) {
                setBookTitle(book.product.title);
                setBookAuthor(book.product.author);
                setBookRating(book.product.rating);
                setBookCover(book.product.cover);
                setBookDescription(book.product.description);
                setBookGenre(book.product.genre);
                setBookYear(book.product.year);
                setBookEditorial(book.product.editorial);
                setBookIsbn(book.product.isbn);
            }
        }
        return () => listStore.removeChangeListener(onChange);
    }, [bookList.length, props.match.params.bookId]);

    function onChange() {
        setBookList(listStore.getBookList());
    }
    return (
        <>
            {bookTitle && (
                <BookDetailItem
                    image={bookCover}
                    author={bookAuthor}
                    rating={bookRating}
                    title={bookTitle}
                    description={bookDescription}
                    genre={bookGenre}
                    year={bookYear}
                    isbn={bookIsbn}
                    editorial={bookEditorial}
                />
            )}
        </>
    );
}

export default BookDetail;
