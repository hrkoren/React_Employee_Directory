import React from 'react';
import './style.css';

function EmployeeCard(props) {
    console.log(props);
    return (
        <table className='table table-sortable text-center table-striped'>
            <thead className='thead-dark text-center'>
                <tr>
                    <th scope='col'>Image</th>
                    <th scope='col' data-field='name' data-sortable='true'>
                        <span onClick={() => props.employees.sort('name')}>Name</span></th>
                    <th scope='col'>Email</th>
                    <th scope='col'>Phone</th>
                </tr>
            </thead>
            <tbody>
                {props.employees.map((employee) => {
                    return (
                        <tr key={employee.id.value}>
                            <td className='align-middle'><img src={employee.picture.thumbnail} alt='employee' /></td>
                            <td className='align-middle'>{employee.name.first} {employee.name.last}</td>
                            <td className='align-middle'>{employee.email}</td>
                            <td className='align-middle'>{employee.phone}</td>
                            {/* <td className='align-middle'>{employee.dob}</td> */}
                        </tr>
                    );
                })}
            </tbody>
        </table >
    );
};

export default EmployeeCard;
