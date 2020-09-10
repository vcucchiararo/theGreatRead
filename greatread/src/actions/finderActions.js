import dispatcher from '../dispatcher';
import actionTypes from './actionTypes';
import axios from 'axios';

export function finderSearch(query) {
    return axios
        .get('/api/books', {
            params: {
                title: query
            }
        })
        .then((book) => {
            dispatcher.dispatch({
                type: actionTypes.LOAD_BOOK_LIST,
                data: book.data
            });
        });
}
