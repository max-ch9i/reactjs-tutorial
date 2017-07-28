import React from 'react';
import { mount } from 'enzyme';
import App from './App';

describe('App integrity checker', () => {
    it(`The catalog should be of the format`, () => {
        const wrapper = mount(<App />);
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
        const wrapper = mount(<App />);
        const dashboard = wrapper.find('Dashboard');
        expect(dashboard.find('section.Dashboard > div.container > .controls').length).toBe(1);
        expect(dashboard.find('section.Dashboard > div.container > .summary').length).toBe(1);
    });
});
