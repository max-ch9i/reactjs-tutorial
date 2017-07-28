import React from 'react';
import { mount } from 'enzyme';
import Destination from '../Destination';

describe('Task 3', () => {
    it(`Component Destination renders a quotation mark when no props are set,
        which is wrapped into <span class="where"></span>`, () => {
            const wrapper = mount(<Destination destination={null} destinationImg={null}/>);
            expect(wrapper.find('span.where').text()).toBe('?');
    });
    it(`Component Destination does not change its state immediately`, () => {
            const wrapper = mount(<Destination destination={null} destinationImg={null}/>);
            wrapper.setProps({
                destination: 'mercury',
                destinationImg: '/mercury.jpg'
            });
            expect(wrapper.find('span.where').length).toBe(1);
            expect(wrapper.state().destination).toBe(null);
    });
    it(`Component Destination changes its state in after .4 seconds to animate the element out`, () => {
        const wrapper = mount(<Destination destination={null} destinationImg={null}/>);
        jest.useFakeTimers();
        wrapper.setProps({
            destination: 'mercury',
            destinationImg: '/mercury.jpg'
        });
        expect(wrapper.find('span.where').length).toBe(1);
        jest.runTimersToTime(300);
        expect(wrapper.find('span.where').length).toBe(1);
        jest.runTimersToTime(500);
        expect(wrapper.find('span.where').length).toBe(0);
    });
    it(`Component Destination renders an image when the state is changed.
        The tag format <img src="destination" alt="destination"/>`, () => {
        const wrapper = mount(<Destination destination={null} destinationImg={null}/>);
        jest.useFakeTimers();
        wrapper.setProps({
            destination: 'mercury',
            destinationImg: '/mercury.jpg'
        });
        jest.runTimersToTime(500);
        const img = wrapper.find('img');
        expect(img.length).toBe(1);
        expect(img.prop('src')).toBe('/mercury.jpg');
        expect(img.prop('alt')).toBe('mercury');
    });
});
