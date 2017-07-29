import {
    UPDATE_TIME
} from '../actions/types';

const INITIAL_STATE = null;

export default (state = INITIAL_STATE, action) => {
    /*
     * Task 5. Update the state when an UPDATE_TIME action is dispatched
     *
     * Topics: Redux reducers. Help: http://redux.js.org/docs/basics/Reducers.html#handling-actions
     *
     * TODO: Update the state when the action type is UPDATE_TIME.
     *       Return the same state when any other action type is dispatched.
     *       Make sure the state is always either null or a number.
     */
    return null;
};

















































/*
 * Solution to Task 5:
 *  switch(action.type) {
 *      case UPDATE_TIME:
 *          return +action.payload;
 *      default:
 *          return state;
 *  }
 */
