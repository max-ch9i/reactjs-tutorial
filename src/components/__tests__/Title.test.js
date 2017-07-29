import React from 'react';
import { mount } from 'enzyme';
import Title from '../Title';

describe('Task 3 (easy)', () => {
    it(`Spaceport should be the title of the app.
        Dashboard has a Title component with the text prop passed to it.
        Read the title from the prop text and place it in <h1>.
        Makes changes at ./src/components/Title.js`, () => {
        const wrapper = mount(<Title text="Spaceport"/>);
        expect(wrapper).toHaveHTML('<h1>Spaceport</h1>');
        const wrapper1 = mount(<Title text="Runway"/>);
        expect(wrapper1).toHaveHTML('<h1>Runway</h1>');
    });
})
