import React from 'react';
import { favoriteBook } from '../../actions/userActions';

function addFavoriteBook(sub, bookId) {
    return favoriteBook(sub, bookId);
}

export default addFavoriteBook;
