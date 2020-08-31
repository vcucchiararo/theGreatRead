import dispatcher from '../dispatcher';
import actionTypes from './actionTypes';
import booksMock from '../mocks/booksMock';

export function loadBookList() {
    const data = booksMock;
    dispatcher.dispatch({
        type: actionTypes.LOAD_BOOK_LIST,
        data: data
    });
}
