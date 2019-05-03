import React from 'react';
import { performOperation } from '../helpers';

function Operator({ children, state, dispatch }) {
    function handleClick() {
        try {
            if (state.secondOperand !== '') {
                const result = performOperation(state) + '';
                dispatch({
                    type: 'CALCULATE',
                    display: result,
                    firstOperand: result,
                    secondOperand: '',
                    operator: children,
                });
            } else if (state.firstOperand) {
                dispatch({ type: 'SET_OPERATOR', operator: children });
            }
        } catch (e) {
            dispatch({ type: 'ERROR' });
        }
    }

    return (
        <button onClick={handleClick} className="operator">
            {children}
        </button>
    );
}

export default Operator;
