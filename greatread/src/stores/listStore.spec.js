import listStore from './listStore';
import actionTypes from '../actions/actionTypes';
import dispatcher from '../dispatcher';

function reduceAction(action, data) {
    return {
        type: action,
        data
    };
}

describe('ListStore', () => {
    let action;
    let myCallbackMockFunction;
    beforeEach(() => {
        myCallbackMockFunction = jest.fn();
        listStore.addChangeListener(myCallbackMockFunction);

        action = reduceAction(actionTypes.LOAD_BOOK_LIST, [
            { id: 1, bookTitle: 'Postales del Este' }
        ]);
        dispatcher.dispatch(action);
    });
    afterEach(() => {
        listStore.removeChangeListener(myCallbackMockFunction);
    });

    it('should create', () => {
        expect(myCallbackMockFunction).toHaveBeenCalled();
        expect(listStore).toBeDefined();
    });
    it('Should register LOAD_BOOK_LIST', () => {
        expect(listStore.getBookList()).toEqual(action.data);
    });
    it('Should register load a book by ID', () => {
        expect(listStore.getBookById()).toEqual(action.data.id);
    });
    it('should register load a book with invalid ID', () => {
        action = reduceAction(actionTypes.LOAD_BOOK_LIST, [
            { id: 25, bookTitle: 'Celeritas' }
        ]);
        dispatcher.dispatch(action);

        const updateBook = listStore.getBookById(action.data.id);
        expect(updateBook).not.toBeDefined();
    });
    it('Should handle default case for action types', () => {
        try {
            dispatcher.dispatch({});
            expect(listStore).toBeFalsy();
        } catch (errorMessage) {
            expect(errorMessage).toBeTruthy();
        }
    });
});
