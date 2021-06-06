import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import image from '../../../public/images/find_icon.png';

function Home() {
    return (
        <div>
            <h1 className='heading'>Employee Directory</h1>
            <Link to='/employee' className='link'>View Employee List</Link>
        </div>
        <div className='image'>
        <img src={image} alt='find icon'/>
        </div>
    );
}

export default Home;
