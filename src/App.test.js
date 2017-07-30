import React from 'react';
import { mount } from 'enzyme';
import App from './App';

const sample = {"venus":{"distance":200000,"img":"/venus.jpg","title":"Venus"},"jupiter":{"distance":500000,"img":"/jupiter.jpg","title":"Jupiter"}};

fetchMock.get('http://beta.json-generator.com/api/json/get/VyuWWCrUm', sample);

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

import * as actions from './actions/types';
import * as actionCreators from './actions/flight';
import fetchMock from 'fetch-mock';
import Catalog from './reducers/Catalog';

describe('Task 6 (ludicrous) Load the catalog asynchronously', () => {
    it(`Create action types LOAD_CATALOG and UPDATE_CATALOG.
        Make changes at ./src/actions/types.js`, () => {
        expect(actions).toHaveProperty('LOAD_CATALOG');
        expect(actions).toHaveProperty('UPDATE_CATALOG');
    });
    it(`Create action creators for loading and updating the catalog.
        Make changes at ./src/actions/flight.js`, () => {
            expect(actionCreators).toHaveProperty('updateCatalog');
            expect(actionCreators).toHaveProperty('loadCatalog');

            const {updateCatalog, loadCatalog} = actionCreators;

            const action = updateCatalog(sample);
            expect(action).toMatchObject({
                type: actions.UPDATE_CATALOG,
                payload: sample
            });

            const promise = loadCatalog('http://beta.json-generator.com/api/json/get/VyuWWCrUm')((action) => {
                expect(action).toMatchObject({
                    type: actions.UPDATE_CATALOG,
                    payload: sample
                });
            });

            return promise;
    });
    it(`Create a reducer for the catalog property in the state.
        Make changes at ./src/reducers/Catalog.js`, () => {
            const state = Catalog(undefined, {});
            expect(state).toMatchObject({});
            const state1 = Catalog(undefined, {
                type: actions.UPDATE_CATALOG,
                payload: sample
            });
            expect(state1).toMatchObject(sample);
        });
});
