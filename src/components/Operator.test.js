import React from 'react';
import { shallow } from 'enzyme';
import Operator from './Operator';

describe('Operator component', () => {
    it('should render operator', () => {
        const { wrapper } = renderOperator('+');

        expect(wrapper.text()).toBe('+');
    });

    it('should dispatch SET_OPERATOR action when only firstOperand is present', () => {
        const { wrapper, dispatch } = renderOperator('+', { firstOperand: '2', secondOperand: '', operator: '+' });
        wrapper.simulate('click');

        expect(dispatch).toHaveBeenCalledWith({
            type: 'SET_OPERATOR',
            operator: '+',
        });
    });

    it('should dispatch CALCULATE action when both operands are present', () => {
        const { wrapper, dispatch } = renderOperator('+', { firstOperand: '2', secondOperand: '3' });
        wrapper.simulate('click');

        expect(dispatch).toHaveBeenCalledWith({
            type: 'CALCULATE',
            display: '5',
            firstOperand: '5',
            operator: '+',
            secondOperand: '',
        });
    });

    it('should not dispatch any action if no operands are present', () => {
        const { wrapper, dispatch } = renderOperator('+', { firstOperand: '', secondOperand: '' });
        wrapper.simulate('click');

        expect(dispatch).not.toHaveBeenCalled();
    });  

    it('should dispatch ERROR action in case of exceptions', () => {
        const { wrapper, dispatch } = renderOperator('+');
        wrapper.simulate('click');

        expect(dispatch).toHaveBeenCalledWith({ type: 'ERROR' });
    });
});

function renderOperator(children, state) {
    const props = { children, state, dispatch: jest.fn() };
    const wrapper = shallow(<Operator {...props} />).find('button');
    return { wrapper, dispatch: props.dispatch };
}
