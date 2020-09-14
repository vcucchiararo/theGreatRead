import React, { useEffect, useState } from 'react';
import searchStore from '../../stores/searchStore';
import { loadBookById } from '../../actions/listActions';
import BookDetailItem from './BookDetailItem';
import { useAuth0 } from '@auth0/auth0-react';
import userStore from '../../stores/userStore';
import { loadUser, favoriteBook } from '../../actions/userActions';

function BookDetail({ match }) {
    const { user, isAuthenticated } = useAuth0();
    const [mongoUser, setMongoUser] = useState(userStore.getUser());
    const [book, setBook] = useState(
        searchStore.getBookById(match.params.bookId)
    );
    const [userLoaded, setUserLoaded] = useState(userStore.getUser());
    const [toggleFavoriteButton, setToggleFavoriteButton] = useState();

    useEffect(() => {
        searchStore.addChangeListener(onChange);

        if (!book) {
            loadBookById(match.params.bookId);
        }
        return () => searchStore.removeChangeListener(onChange);
    }, [book, match.params.bookId]);

    function onChange() {
        setBook(searchStore.getBookById());
    }

    function onSubmit() {
        (async function userLoading() {
            await loadUser(user?.sub);
            setMongoUser(userStore.getUser());
        })();
        if (mongoUser && mongoUser.favoriteBooks) {
            // const isToggleButton = mongoUser.favoriteBooks.some((elem) => {
            mongoUser.favoriteBooks.some((elem) => {
                return elem.id === match.params.bookId;
            });
            setToggleFavoriteButton(!toggleFavoriteButton);
            const book = searchStore.getBookById(match.params.bookId);
            favoriteBook(userLoaded.sub, book);
        }
    }

    return (
        <>
            {book && (
                <BookDetailItem
                    user={user}
                    isAuthenticated={isAuthenticated}
                    userSub={userLoaded.sub}
                    submit={onSubmit}
                    toggleFavoriteButton={toggleFavoriteButton}
                    book={book}
                />
            )}
        </>
    );
}

export default BookDetail;
