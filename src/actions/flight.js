import {
    UPDATE_TIME,
    UPDATE_DESTINATION
    // Task 6: include the LOAD_CATALOG and UPDATE_CATALOG actions
    , LOAD_CATALOG
    , UPDATE_CATALOG
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
 *       The creator has to return a action type UPDATE_CATALOG
 *       and the catalog object as the payload.
 */
export const updateCatalog = (catalog) => {
    return {
        type: UPDATE_CATALOG,
        payload: catalog
    };
};

/*
 * Task 6. Create an async action creator to update the catalog of destinations
 *
 * Topics: Redux async actions. Help: http://redux.js.org/docs/advanced/AsyncActions.html#async-action-creators
 *
 * TODO: Export an action creator named loadCatalog.
 *       loadCatalog has one argument source, which is the url where to load from.
 *       Use the thunk syntax to fetch the catalog json from source. Fetch syntax is required.
 *       export const loadCatalog = (source) => {};
 *       When fetched dispatch the UPDATE_CATALOG action with the updateCatalog action creator.
 */
export const loadCatalog = (source) => {
    return dispatch => {
        return fetch(source)
            .then(res => res.json())
            .then(json => {
                dispatch(updateCatalog(json));
            });
    };
};





























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
