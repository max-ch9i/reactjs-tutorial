import { combineReducers } from 'redux';
import reduceReducers from 'reduce-reducers';
import FlightTime from './FlightTime';
import FlightDestination from './FlightDestination';
import Catalog from './Catalog';
import {
    getDistance,
} from '../selectors';

const isolatedReducers = combineReducers({
    duration: FlightTime,
    destination: FlightDestination,
    catalog: Catalog,
    speed: () => null
});

const finalReducer = reduceReducers(
    isolatedReducers,
    (state, action) => {
        return {...state, speed: getDistance(state) / state.duration};
    }
);

export default finalReducer;
