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
        Make changes at ./src/Dashboard.js`, () => {
            const dashboard = wrapper.find('Dashboard');
            const fly = dashboard.find('.controls > div');
            expect(fly.length).toBe(1);
            expect(fly).toHaveProp('className', 'duration-style');
    });
});

describe('Task 2', () => {
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
