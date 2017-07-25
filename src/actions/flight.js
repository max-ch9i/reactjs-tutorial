import {
    UPDATE_TIME,
    UPDATE_DESTINATION
} from './types';

export const updateTime = (time) => {
    return {
        type: UPDATE_TIME,
        payload: time
    };
};

export const updateDestination = (destination) => {
    return {
        type: UPDATE_DESTINATION,
        payload: destination
    };
};
