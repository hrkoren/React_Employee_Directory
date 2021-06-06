import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Home() {
    return (
        <div>
            <h1 className='text-center'>Employee Directory</h1>
            <Link to='/employee' className='link'>View Employee List</Link>
        </div>
    );
}

export default Home;
