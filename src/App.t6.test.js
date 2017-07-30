import React from 'react';
import { mount } from 'enzyme';
import App from './App';

const sample = {"venus":{"distance":200000,"img":"/venus.jpg","title":"Venus"},"jupiter":{"distance":500000,"img":"/jupiter.jpg","title":"Jupiter"}};

fetchMock.get('http://beta.json-generator.com/api/json/get/VyuWWCrUm', sample);

import * as actions from './actions/types';
import * as actionCreators from './actions/flight';
import fetchMock from 'fetch-mock';
import { _dispatch } from 'redux';

jest.mock('./actions/flight', () => {
    return {
        loadCatalog: jest.fn(() => ({
            type: ''
        }))
    };
});

jest.mock('redux', () => {
    const _dispatch = jest.fn(()=>{});
    return {
        _dispatch,
        createStore: () => {
            return {
                subscribe: () => {},
                dispatch: _dispatch,
                getState: () => {
                    return {
                        duration: null,
                        destination: null,
                        catalog: {},
                        speed: null
                    };
                }
            };
        },
        applyMiddleware: () => {},
        combineReducers: () => {},
        bindActionCreators: () => {}
    };
});

describe('Task 6 (ludicrous) Load the catalog asynchronously', () => {
    it(`Dispatch loadCatalog when App is mounted.
        The url with the catalog is http://beta.json-generator.com/api/json/get/VyuWWCrUm
        Make changes at ./App.js`, () => {
            const wrapper = mount(<App />);
            expect(actionCreators.loadCatalog).toHaveBeenCalled();
            expect(_dispatch).toHaveBeenCalled();
        });
});
