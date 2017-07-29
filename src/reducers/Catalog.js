// export default const Catalog = () => ({
//     jupiter: {
//         title: 'Jupiter',
//         img: '/jupiter.jpg',
//         distance: 500000
//     },
//     venus: {
//         title: 'Venus',
//         img: '/venus.jpg',
//         distance: 200000
//     }
// });

/*
 * Task 6. Update the reducer to respond to the UPDATE_CATALOG action
 *
 * TODO: 1. import UPDATE_CATALOG action from action/types
 *       2. create const INITIAL_STATE = {} as catalog will be loaded async
 *       3. Add export default (state = INITIAL_STATE, action) => {}
 *       4. In the body of the function add a switch and detect UPDATE_CATALOG action
 */

import {
    UPDATE_CATALOG
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case UPDATE_CATALOG:
            return action.payload;
        default:
            return state;
    }
};
































/*
 * Solution to Task 6:
 *
 * import {
 *     UPDATE_CATALOG
 * } from '../actions/types';
 *
 * const INITIAL_STATE = {};
 *
 * export default (state = INITIAL_STATE, action) => {
 *     switch(action.type) {
 *         case UPDATE_CATALOG:
 *             return action.payload;
 *         default:
 *             return state;
 *     }
 * };
 *
 */
