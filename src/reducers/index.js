import { combineReducers } from 'redux';
import FlightTime from './FlightTime';
import FlightDestination from './FlightDestination';

export default combineReducers({
    duration: FlightTime,
    destination: FlightDestination,
    catalog: () => ({
        jupiter: {
            title: 'Jupiter',
            img: '/jupiter.png',
            distance: 500000
        },
        venus: {
            title: 'Venus',
            img: '/venus.jpg',
            distance: 200000
        }
    })
 });
