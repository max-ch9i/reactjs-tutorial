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

describe('Task 1', () => {
    const wrapper = mount(<App />);

    it(`Fly there for... text should be lowercase.
        Apply duration-style class to the div to apply the transform.
        Make change at ./src/Dashboard.js`, () => {
            const dashboard = wrapper.find('Dashboard');
            const fly = dashboard.find('.controls > div');    
            expect(fly.length).toBe(1);
            expect(fly.props().className).toBe('duration-style');
    });
});
