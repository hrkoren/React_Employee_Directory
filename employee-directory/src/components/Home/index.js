import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>Employee Directory</h1>
            <Link to='/employee'>View Employee List</Link>
        </div>
    );
}

export default Home;
