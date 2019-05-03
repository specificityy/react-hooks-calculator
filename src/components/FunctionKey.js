import React from 'react';

function FunctionKey({ children, className = '', dispatch, type }) {
    function handleClearClick() {
        dispatch({ type });
    }

    return (
        <button onClick={handleClearClick} className={`function-key ${className}`}>
            {children}
        </button>
    );
}

export default FunctionKey;
