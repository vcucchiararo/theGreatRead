import dispatcher from '../dispatcher';
import actionTypes from './actionTypes';
import booksMock from '../mocks/booksMock';

export function loadBookList() {
    return new Promise((resolve) => {
        resolve(booksMock);
    }).then((book) => {
        dispatcher.dispatch({
            type: actionTypes.LOAD_BOOK_LIST,
            data: book
        });
    });
}
