import { combineReducers } from 'redux';
import reduceReducers from 'reduce-reducers';
import FlightTime from './FlightTime';
import FlightDestination from './FlightDestination';
import {
    getDistance,
} from '../selectors';

const isolatedReducers = combineReducers({
    duration: FlightTime,
    destination: FlightDestination,
    catalog: () => ({
        jupiter: {
            title: 'Jupiter',
            img: '/jupiter.jpg',
            distance: 500000
        },
        venus: {
            title: 'Venus',
            img: '/venus.jpg',
            distance: 200000
        }
    }),
    speed: () => null
});

const finalReducer = reduceReducers(
    isolatedReducers,
    (state, action) => {
        return {...state, speed: getDistance(state) / state.duration};
    }
);

export default finalReducer;
