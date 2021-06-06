import React from 'react';
import './style.css';

function EmployeeCard(props) {
console.log(props);
return (
    <table className='table striped table-sortable text-center'>
        <thead className='thead-dark'>
            <tr>
                <th scope='col'>Image</th>
                <th scope='col' data-field='name' data-sortable='true'>
                    <span onClick={() => props.sort('last', 'first')}>Name</span></th>
            <th scope='col'>Email</th>
            <th scope='col'>Phone</th>
            </tr>
            </thead>
        <tbody>
        {props.employees.map((employee)=> {
            return (
            <tr>
                <td className='align-middle'><img src={employee.picture.thumbnail} alt='employee' /></td>
                <td className='align-middle'>{employee.first} {employee.last}</td>
                <td className='align-middle'>{employee.email}</td>
                <td className='align-middle'>{employee.phone}</td>
            </tr>
        );
        })}
        </tbody>
    </table>
);
};

export default EmployeeCard;
