import dispatcher from '../dispatcher';
import actionTypes from './actionTypes';
import axios from 'axios';

export function booksSearch(query) {
    return axios
        .get('/api/books', {
            params: {
                title: query
            }
        })
        .then((books) => {
            dispatcher.dispatch({
                type: actionTypes.SEARCH_BOOKS,
                data: books.data
            });
        });
}
