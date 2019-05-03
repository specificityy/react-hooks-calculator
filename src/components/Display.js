import React from 'react';

import logo from './logo.png';

function Display({ children }) {
    return (
        <>
            <img src={logo} alt="logo" width="200" /> <div className="display">{children}</div>
        </>
    );
}

export default Display;
