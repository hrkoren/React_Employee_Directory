import React from 'react';
import './style.css';

const Header = () => {
    rturn (
        <header>
        <h1 className='text-center'>Employee Directory</h1>
        <h3 className='text-center'>Click on the column headers to sort/filter the results</h3>
        </header>
    );
};

export default Header;