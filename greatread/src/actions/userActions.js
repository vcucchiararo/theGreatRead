import dispatcher from '../dispatcher';
import actionTypes from './actionTypes';
import axios from 'axios';

export function createUser(userData) {
    console.log('---------> userData:', userData);
    return axios.post('/api/users', userData).then((userData) => {
        dispatcher.dispatch({
            type: actionTypes.CREATE_USER,
            data: userData.data
        });
    });
}
