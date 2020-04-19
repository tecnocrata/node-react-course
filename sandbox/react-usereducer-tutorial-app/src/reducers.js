import { SET_CONTACTS } from './actions';

function contactsReducer(state = {}, action) {
    switch (action.type) {
        case SET_CONTACTS:
            state = JSON.parse(JSON.stringify(action.payload));
            return state;
        default:
            return state
    }
}

export { contactsReducer };