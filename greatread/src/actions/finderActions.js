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
        .then((books) => {
            console.log('books----', books);
            dispatcher.dispatch({
                type: actionTypes.SEARCH_FINDER,
                data: books.data
            });
        });
}
