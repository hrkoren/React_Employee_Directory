import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card/index';


function EmployeeCard() {
    const [employees, setEmployees] = useState();

    useEffect(() => {
        axios('https://randomuser.me/api/?results=20&inc=name,location,email,dob,phone,id,picture').then((data) => {
            setEmployees(data);
        })
            .catch(err => {
                console.log(err);
            });
    }, []);

    console.log(employees)

    return (
        <div className="flex flex-wrap">
            {props.employees.map((employee, index) => {
                return (<Card picture={employee.picture} name={employee.name} id={employee.id} email={employee.email} phone={employee.phone} location={employee.location} key={index} />)
            })}
        </div>

    )
}

export default EmployeeCard;
