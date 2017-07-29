import React from 'react';
import { mount } from 'enzyme';
import App from './App';

describe('App integrity checker', () => {
    const wrapper = mount(<App />);

    it(`The catalog should be of the format`, () => {
        const dashboard = wrapper.find('Dashboard');
        const initCatalog = dashboard.prop('catalog');
        expect(initCatalog).toBeDefined();
        Object.keys(initCatalog).forEach(destination => {
            expect(initCatalog[destination]).toEqual(expect.objectContaining({
                title: expect.any(String),
                img: expect.any(String),
                distance: expect.any(Number)
            }));
        });
    });
    it(`The overall jsx structure`, () => {
        const dashboard = wrapper.find('Dashboard');
        expect(dashboard.find('section.Dashboard > div.container > .controls').length).toBe(1);
        expect(dashboard.find('section.Dashboard > div.container > .summary').length).toBe(1);
    });
});

describe('Task 1 (easy)', () => {
    const wrapper = mount(<App />);

    it(`Fly there for... text should be lowercase.
        Apply duration-style class to the div to apply the transform.
        Make changes at ./src/Dashboard.js`, () => {
            const dashboard = wrapper.find('Dashboard');
            const fly = dashboard.find('.controls > div');
            expect(fly.length).toBe(1);
            expect(fly).toHaveProp('className', 'duration-style');
    });
});

describe('Task 2 (easy)', () => {
    const wrapper = mount(<App />);

    it(`Display hints on how to use the application.
        Use a prepared Hint component and pass correct properties to it.
        Make changes at ./src/Dashboard.js`, () => {
            const dashboard = wrapper.find('Dashboard');
            const hint = dashboard.find('.summary').find('Hint');
            expect(hint).toBePresent();
            expect(hint).toHaveProp('duration', null);
            expect(hint).toHaveProp('destination', null);
    });
});

import { updateTime } from './actions/flight';
import {
    UPDATE_TIME
} from './actions/types';
import FlightTime from './reducers/FlightTime';

describe('Task 5 (hard) Update duration in the redux state', () => {
    it(`Return the correct action type from updateTime action creator.
        Make changes at ./src/actions/flight.js`, () => {
        const action = updateTime(150);
        expect(action).toMatchObject({
            type: UPDATE_TIME,
            payload: 150
        });
        const action1 = updateTime('150');
        expect(action1).toMatchObject({
            type: UPDATE_TIME,
            payload: '150'
        });
    });

    it(`FlightTime reducer must update its state when action type is UPDATE_TIME.
        For any other action keep the state unchanged.
        State must always be a number or null.
        Make changes at ./src/reducers/FlightTime.js`, () => {
        const state = FlightTime(null, {});
        expect(state).toBeNull();
        const state1 = FlightTime(null, {
            type: UPDATE_TIME,
            payload: 150
        });
        expect(state1).toBe(150);
        const state2 = FlightTime(null, {
            type: UPDATE_TIME,
            payload: '150'
        });
        expect(state2).toBe(150);
    });
});
