import {
    UPDATE_TIME,
    UPDATE_DESTINATION
} from './types';

export const updateDestination = (destination) => {
    return {
        type: UPDATE_DESTINATION,
        payload: destination
    };
};

export const updateTime = (time) => {
    /*
     * Task 5. Send the correct action to the dispatcher
     *
     * Topics: Redux actions. Help: http://redux.js.org/docs/basics/Actions.html
     *
     * TODO: return an action with the type UPDATE_TIME and time as payload
     */
    return {type: ''};
};

















/*
 * Solution to Task 5:
 *
 *  return {
 *      type: UPDATE_TIME,
 *      payload: time
 *  };
*/
