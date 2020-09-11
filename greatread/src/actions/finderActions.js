import dispatcher from '../dispatcher';
import actionTypes from './actionTypes';
import axios from 'axios';

export function finderSearch(query) {
    console.log('entro---------', query);
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

    // const response = await axios.get('/api/books', {
    //     params: {
    //         title: query
    //     }
    // });

    // if (response.data.length > 0) {
    //     console.log('books----', response.data);
    //     dispatcher.dispatch({
    //         type: actionTypes.SEARCH_FINDER,
    //         data: response.data
    //     });
    // }
}
