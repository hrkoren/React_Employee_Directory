import React, { useState, useEffect } from 'react';
import axios from 'axios';


function EmployeeCard() {
    const [employees, setEmployees] = useState();

    useEffect(() => {
        axios('https://randomuser.me/api/?results=50').then((data) => {
            setEmployees(data);

        });
    }, []);

    console.log(employees)

    return (
        <div></div>

    )
}

export default EmployeeCard;
