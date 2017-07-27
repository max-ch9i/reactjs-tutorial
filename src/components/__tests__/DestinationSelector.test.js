import React from 'react';
import { shallow } from 'enzyme';
import DestinationSelector from '../DestinationSelector';

describe('Task 2', () => {
    const catalog = {
        mercury: {
            title: 'Mercury',
            img: '/mercury.jpg',
            distance: 500000
        }
    };

    const updateDestination = jest.fn(destination => destination);
    const wrapper = shallow(<DestinationSelector catalog={catalog} updateDestination={updateDestination}/>);

    it(`Component DestinationSelector\'s should be called with the catalog format`);

    it(`Component DestinationSelector\'s output format should be
            <ul><li><button></li></ul>
        where <li> represents each property in the catalog (e.g., Object.keys(catalog)`, () => {
        const ul = wrapper.find('ul');
        expect(ul).toHaveLength(1);
        const li = ul.find('li');
        expect(li).toHaveLength(Object.keys(catalog).length);
        const button = li.find('button');
        expect(button).toHaveLength(1);
    });

    it(`Component DestinationSelector\'s output format should be
            <ul><li><button></li></ul>
        where <button>'s value is catalog's item key (e.g., Object.keys(catalog)[0])
        and where <buttons>'s text is catalog.item.title'`, () => {
        const ul = wrapper.find('ul');
        expect(ul).toHaveLength(1);
        const li = ul.find('li');
        expect(li).toHaveLength(Object.keys(catalog).length);
        const button = li.find('button');
        expect(button.prop('value')).toBe('mercury');
        expect(button.text()).toBe('Mercury');
    });

    it(`Component DestinationSelector\'s output format should be
            <ul><li><button></li></ul>
        where a click on <button> calls prop updateDestination
        and prop updateDestination is called with the catalog item (e.g., Object.keys(catalog)[0])`, () => {
        const ul = wrapper.find('ul');
        expect(ul).toHaveLength(1);
        const li = ul.find('li');
        expect(li).toHaveLength(Object.keys(catalog).length);
        const button = li.find('button');
        button.simulate('click');
        expect(updateDestination).toHaveBeenCalled();
        expect(updateDestination.mock.calls[0][0]).toBe('mercury');
    });
});

