import { createSelector } from 'reselect';

const getDestination = state => state.destination;
const getCatalog = state => state.catalog;

export const getDistance = createSelector(
    [getDestination, getCatalog],
    (destination, catalog) => {
        if (destination === null) {
            return null;
        }

        return catalog[destination].distance;
    }
);

export const getDestinationTitle = createSelector(
    [getDestination, getCatalog],
    (destination, catalog) => {
        if (destination === null) {
            return null;
        }

        return catalog[destination].title;
    }
);

export const getDestinationImg = createSelector(
    [getDestination, getCatalog],
    (destination, catalog) => {
        if (destination === null) {
            return null;
        }

        return catalog[destination].img;
    }
);

// Task: Create selector for the destination image
