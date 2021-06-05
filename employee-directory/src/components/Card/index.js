import React from 'react';

function Card(props) {
    return (
        <div className='sm:w=1/2 max-w-sm rounded shadow-md m-auto'>
            <img className='w-full object-fill' alt='Picture of Employee' src={props - picture.large} />
            <div className='font-bold text-l'>{props.name.first} {props.name.last}</div>
        </div>
    )
}