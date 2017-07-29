import React from 'react';
import { mount } from 'enzyme';
import Destination from '../Destination';

describe('Task 4 (medium)', () => {
    it(`Change the destination image when a destination button is pressed.
        The current image animates out first. Then the image is updated and animated in.
        Make changes at ./src/components/Destination.js`, () => {
        const wrapper = mount(<Destination destination={null} destinationImg={null}/>);
        jest.useFakeTimers();
        const question = wrapper.find('span.where');
        expect(question).toBePresent();
        expect(question).toHaveHTML('<span class="where">?</span>');
        wrapper.setProps({
            destination: 'mercury',
            destinationImg: '/mercury.jpg'
        });
        jest.runTimersToTime(200);
        let img = wrapper.find('img');
        expect(img).toBeEmpty();
        jest.runTimersToTime(500);
        img = wrapper.find('img');
        expect(img).toBePresent();
        expect(img).toHaveHTML('<img src="/mercury.jpg" alt="mercury">');
    });
});
