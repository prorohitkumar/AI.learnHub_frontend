import React from 'react';
import NavBar from './navBar';

const Layout = ({ children }) => {
    return (
        <div>
            <NavBar />
            <div style={{ marginTop: '80px' }}>
                {children}
            </div>
        </div>
    );
}

export default Layout;
