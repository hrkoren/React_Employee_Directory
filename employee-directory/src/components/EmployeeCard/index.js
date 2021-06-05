import React, { useState, useEffect } from 'react';
import Card from './Card/index';
import '/style.css';

const EmployeeCard


return (
    <div className="flex flex-wrap">
        {props.employees.map((employee, index) => {
            return (<Card picture={employee.picture} name={employee.name} id={employee.id} email={employee.email} phone={employee.phone} location={employee.location} key={index} />)
        })}
    </div>

)
}

export default EmployeeCard;
