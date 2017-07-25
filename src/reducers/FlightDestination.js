import {
    UPDATE_DESTINATION
} from '../actions/types';

const INITIAL_STATE = null;

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case UPDATE_DESTINATION:
            return action.payload;
        default:
            return state;
    }
};

