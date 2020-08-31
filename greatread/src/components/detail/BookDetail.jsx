import React, { useEffect, useState } from 'react';
import listStore from '../../stores/listStore';
import { loadBookList } from '../../actions/listActions';
import BookDetailItem from './BookDetailItem';
import './detail.scss';

function BookDetail(props) {
    const [bookList, setBookList] = useState(listStore.getBookList());
    const [bookId, setBookId] = useState(null);
    const [bookTitle, setBookTitle] = useState('');
    const [bookAuthor, setBookAuthor] = useState('');
    const [bookRating, setBookRating] = useState(0);
    const [bookCover, setBookCover] = useState('');
    const [bookDescription, setBookDescription] = useState('');

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
                />
            )}
        </>
    );
}

export default BookDetail;
