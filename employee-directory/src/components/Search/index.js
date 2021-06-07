import React from 'react';
import './style.css';

const Search = (props) => {
    return (
        <nav className='navbar navbar-light justify-content-center'>
            <form className='form-inline m-2' onSubmit={props.handleFormSubmit}>
                <input className='form-control'
                    value={props.search}
                    name='search'
                    onChange={props.handleInputChange}
                    type='text'
                    placeholder='Search' />
            </form>
        </nav>
    );
};

export default Search;