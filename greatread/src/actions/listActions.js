import dispatcher from '../dispatcher';
import actionTypes from './actionTypes';
import axios from 'axios';

export function loadBookList(query) {
    return axios
        .get('/api/books', {
            params: {
                author: 'asimov'
            }
        })
        .then((book) => {
            dispatcher.dispatch({
                type: actionTypes.LOAD_BOOK_LIST,
                data: book.data
            });
        });
}
