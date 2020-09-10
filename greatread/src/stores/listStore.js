import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';
import actionTypes from '../actions/actionTypes';

const CHANGE_EVENT = 'change';
let _bookList = [];

class ListStore extends EventEmitter {
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }

    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    getBookList() {
        return _bookList;
    }

    getBookById(id) {
        return _bookList.find((book) => book.id === id);
    }
}

const listStore = new ListStore();

dispatcher.register((action) => {
    switch (action.type) {
        case actionTypes.LOAD_BOOK_LIST:
            _bookList = action.data;
            listStore.emitChange(_bookList);
            break;
        default:
        // throw `The action type is unknown. action.type: ${action.type}`;
    }
});

export default listStore;
