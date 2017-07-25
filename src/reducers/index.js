import { combineReducers } from 'redux';
import FlightTime from './FlightTime';

export default combineReducers({
    duration: FlightTime,
    distance: () => 10000,
});
