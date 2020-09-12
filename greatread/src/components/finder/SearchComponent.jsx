import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { booksSearch } from '../../actions/finderActions';
import { loadUser } from '../../actions/userActions';
import finderStore from '../../stores/searchStore';
import userStore from '../../stores/userStore';

import './searchComponent.scss';
import SearchComponentCard from './components/SearchComponentCard';
import LoadingPage from './../LoadingPage/LoadingPage';

function SearchComponent() {
    const [books, setBooks] = useState(finderStore.getBooks());
    const { user, isAuthenticated } = useAuth0();
    const [userLoaded, setUserLoaded] = useState(userStore.getUser());

    console.log('uuuuuuuuuuuuseeeeeeeerrrrrrrrrrSEARCHCONTAINER', user);
    useEffect(() => {
        finderStore.addChangeListener(onChange);
        if (books.length === 0) booksSearch();
        console.log(
            'uuuuuuuuuuuuseeeeeeeerrrrrrrrrrFUCKINLOADEDDDD',
            userLoaded
        );
        return () => finderStore.removeChangeListener(onChange);
    }, [books]);

    useEffect(() => {
        userStore.addChangeListener(onChange);
        if (userLoaded.length === 0) {
            user && loadUser(user.sub);
        }
        return () => userStore.removeChangeListener(onChange);
    }, [userLoaded.length, user]);

    function onChange() {
        setBooks(finderStore.getBooks());
        setUserLoaded(userStore.getUser());
    }
    return (
        <div>
            <h1 className="search_title">Búsqueda</h1>
            <div className="separator-small-footer"></div>
            {books.length <= 0 && <LoadingPage />}
            {books.length > 0 &&
                books.map((book, index) => (
                    <SearchComponentCard
                        key={index}
                        image={book.image}
                        title={book.title}
                        author={book.author}
                        averageRating={book.averageRating}
                        description={book.description}
                        isFavorite={false}
                    />
                ))}
        </div>
    );
}

export default SearchComponent;
