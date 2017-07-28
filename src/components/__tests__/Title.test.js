import React from 'react';
import { shallow } from 'enzyme';
import Title from '../Title';

describe('Task 1', () => {
    const wrapper = shallow(<Title text="Text"/>);

    it('Component Title should render a single h1 tag with the value of prop "text"', () => {
        expect(wrapper.find('h1').length).toBe(1);
        expect(wrapper.find('h1').text()).toBe('Text');
    });
})
