import { createSelector } from 'reselect';

const getDuration = state => state.duration;
const getDistance = state => state.distance;

export const getSpeed = createSelector(
    [getDuration, getDistance],
    (duration, distance) => {
        if (!Number.isInteger(duration) || duration === 0) {
            return null;
        }
        return distance / duration;
    }
);
