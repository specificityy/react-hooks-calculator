import React from 'react';

function Digit({ children, className = '', state, dispatch }) {
    function handleClick() {
        const operandKey = state.operator ? 'secondOperand' : 'firstOperand';
        dispatch({ type: 'DIGIT_CLICK', operandKey, operandValue: children });
    }

    return (
        <button onClick={handleClick} className={`digit ${className}`}>
            {children}
        </button>
    );
}

export default Digit;