import React from 'react';
import { mount } from 'enzyme';
import App from './App';

describe('Integration Task', () => {
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
});
