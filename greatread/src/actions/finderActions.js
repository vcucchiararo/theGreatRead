import dispatcher from '../dispatcher';
import actionTypes from './actionTypes';
import axios from 'axios';

export function finderSearch(query, filter) {
    return axios
        .get('/api/books', {
            params: {
                query: query,
                filterType: filter
            }
        })
        .then((book) => {
            dispatcher.dispatch({
                type: actionTypes.SEARCH_FINDER,
                data: book.data
            });
        });
}
