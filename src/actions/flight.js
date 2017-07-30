import {
    UPDATE_TIME,
    UPDATE_DESTINATION
    // Task 6: include the LOAD_CATALOG and UPDATE_CATALOG actions
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
 * Task 6. Create an action creator to update the catalog property
 *
 * Topics: Redux actions. Help: http://redux.js.org/docs/basics/Actions.html
 *
 * TODO: Export an action creator named updateCatalog.
 *       The creator has to return an action type UPDATE_CATALOG
 *       and the catalog object as the payload.
 */

/*
 * Task 6. Create an async action creator to update the catalog of destinations
 *
 * Topics: Redux async actions. Help: http://redux.js.org/docs/advanced/AsyncActions.html#async-action-creators
 *
 * TODO: Export an action creator named loadCatalog.
 *       loadCatalog has one argument source, which is the url where to load the data from.
 *       Use the thunk syntax for this action to make it async.
 *       Use fetch to get the catalog json from source.
 *       Definition: export const loadCatalog = (source) => {};
 *       When fetched dispatch the UPDATE_CATALOG action with the updateCatalog action creator.
 */



























/*
 * Solution to Task 5:
 *
 *  return {
 *      type: UPDATE_TIME,
 *      payload: time
 *  };
 */



/*
 * Solution to Task 6:
 *
 *  , LOAD_CATALOG
 *  , UPDATE_CATALOG
 *
 *
 * const updateCatalog = (catalog) => {
 *     return {
 *         type: UPDATE_CATALOG,
 *         payload: catalog
 *     };
 * };
 *
 * export const loadCatalog = (source) => {
 *     return dispatch => {
 *         return fetch(source)
 *             .then(res => res.json())
 *             .then(json => {
 *                 dispatch(updateCatalog(json));
 *             });
 *     };
 * };
 *
 */
