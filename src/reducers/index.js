import { combineReducers } from 'redux';
import FlightTime from './FlightTime';
import FlightDestination from './FlightDestination';

export default combineReducers({
    duration: FlightTime,
    destination: FlightDestination,
    catalog: () => ({
        jupiter: {
            title: 'Jupiter',
            img: null,
            distance: 500000
        },
        venus: {
            title: 'Venus',
            img: null,
            distance: 200000
        }
    })
 });
