import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { booksSearch } from '../../actions/finderActions';
import { loadUser } from '../../actions/userActions';
import finderStore from '../../stores/searchStore';
import userStore from '../../stores/userStore';

import './searchComponent.scss';
import SearchComponentCard from './components/SearchComponentCard';
import LoadingPage from '../LoadingPage/LoadingPage';
import { useEventCallback } from '@material-ui/core';

function SearchComponent() {
    const [books, setBooks] = useState(finderStore.getBooks());
    const { user, isAuthenticated } = useAuth0();
    const [userLoaded, setUserLoaded] = useState(userStore.getUser());
    const [matchBooks, setMatchBooks] = useState([]);

    useEffect(() => {
        userStore.addChangeListener(onChange);
        if (userLoaded.length === 0) {
            user && loadUser(user.sub);
        }
        return () => userStore.removeChangeListener(onChange);
    }, [userLoaded.length, user]);

    useEffect(() => {
        finderStore.addChangeListener(onChange);

        matchFavoriteBooks(userLoaded.favoriteBooks, books);
        return () => finderStore.removeChangeListener(onChange);
    }, [books]);

    function matchFavoriteBooks(favoriteBooks, books) {
        console.log('favoriteBooks-------', favoriteBooks);
        console.log('books-------', books);
        let matchBooksCollection = books;
        matchBooksCollection.forEach((el) => (el.isFavorite = false));

        matchBooksCollection.reduce((result, matchBooksCollection, index) => {
            favoriteBooks &&
                favoriteBooks.forEach((ele) => {
                    if (ele && matchBooksCollection.id === ele.id) {
                        matchBooksCollection.isFavorite = true;
                    }
                });
        }, matchBooksCollection);

        setMatchBooks(matchBooksCollection);
    }

    function onChange() {
        setBooks(finderStore.getBooks());
        setUserLoaded(userStore.getUser());
    }

    return (
        <div>
            <h1 className="search_title">Búsqueda</h1>
            <div className="separator-small-footer"></div>
            {books.length <= 0 && <LoadingPage />}
            {matchBooks.length > 0 &&
                matchBooks.map((book, index) => (
                    <SearchComponentCard
                        key={book.id}
                        id={book.id}
                        image={book.image}
                        title={book.title}
                        author={book.author}
                        averageRating={book.averageRating}
                        description={book.description}
                        isFavorite={book.isFavorite}
                    />
                ))}
        </div>
    );
}

export default SearchComponent;
