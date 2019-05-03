import React from 'react';
import { shallow, mount } from 'enzyme';

import App from './App';

describe('App component', () => {
    it('should render the calculator', () => {
        const wrapper = shallow(<App />);

        const calculator = wrapper.find('.calculator');
        expect(calculator).toHaveLength(1);
        expect(calculator.find('FunctionKey')).toHaveLength(2);
        expect(calculator.find('Operator')).toHaveLength(5);
        expect(calculator.find('Digit')).toHaveLength(11);
    });

    it('should render all clear and plus minus function keys', () => {
        const wrapper = shallow(<App />);

        const keys = ['AC', '±'];
        wrapper.find('FunctionKey').forEach((node, i) => expect(node.html()).toMatch(`>${keys[i]}<`));
    });

    it('should render all 5 operators', () => {
        const wrapper = shallow(<App />);

        const operators = ['÷', '×', '-', '+', '='];
        wrapper.find('Operator').forEach((node, i) => expect(node.html()).toMatch(`>${operators[i]}<`));
    });

    it('should render all digits and dot', () => {
        const wrapper = shallow(<App />);

        const digits = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.'];
        wrapper.find('Digit').forEach((node, i) => expect(node.html()).toMatch(`>${digits[i]}<`));
    });

    it('should render digits in the display', () => {
        const wrapper = mount(<App />);

        wrapper
            .find('.digit')
            .first()
            .simulate('click');

        expect(wrapper.find('.display').text()).toBe('7');
    });
});
