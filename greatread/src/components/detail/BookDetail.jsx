import React, { useEffect, useState } from 'react';
import listStore from '../../stores/listStore';
import { loadBookList } from '../../actions/listActions';
import BookDetailItem from './BookDetailItem';
import { useAuth0 } from '@auth0/auth0-react';
import userStore from '../../stores/userStore';

function BookDetail(props) {
    let [bookList, setBookList] = useState(listStore.getBookList());
    const { user, isAuthenticated } = useAuth0();
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
    const [userLoaded, setUserLoaded] = useState(userStore.getUser());
    console.log('---------> userLoaded es... será andefainnn?', userLoaded);
    useEffect(() => {
        listStore.addChangeListener(onChange);
        const bookId = props.match.params.bookId;
        if (bookList.length === 0) {
            loadBookList();
        } else if (bookId) {
            const book = listStore.getBookById(bookId);
            if (book) {
                setBookId(book.id);
                setBookTitle(book.title);
                setBookAuthor(book.author);
                setBookRating(book.averageRating);
                setBookCover(book.image);
                setBookDescription(book.description);
                setBookGenre(book.genre);
                setBookYear(book.year);
                setBookEditorial(book.editorial);
                setBookIsbn(book.isbn);
                setUserLoaded(userStore.getUser());
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
                    user={user}
                    isAuthenticated={isAuthenticated}
                    bookId={bookId}
                    userSub={userLoaded.sub}
                />
            )}
        </>
    );
}

export default BookDetail;
