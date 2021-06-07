import React from 'react';
import './style.css';

const Header = () => {
    return (
        <header>
        <h1 className='text-center'>Employee Directory</h1>
        <h3 className='text-center'>Click on the name column header to sort the results.</h3>
        </header>
    );
};

export default Header;