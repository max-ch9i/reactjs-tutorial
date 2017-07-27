import React from 'react';
import { shallow } from 'enzyme';
import Title from '../Title';

describe('Task 1', () => {
    const wrapper = shallow(<Title text="Text"/>);

    it('Component Title should receive a prop called "text"', () => {
        expect(wrapper.instance().props.text).toEqual('Text');
    });

    it('Component Title should render an h1 tag with the value of the text prop', () => {
        expect(wrapper.find('h1')).toHaveLength(1);
        expect(wrapper.find('h1').text()).toBe('Text');
    });
})
