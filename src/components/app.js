import React, { Component } from 'react';
import EmployeeCard from './EmployeeCard/index';
import Title from './Title/index';
import Wrapper from './Wrapper/index';

class App extends Component {
    state = {
        employees
    }

    render() {
        return (
            <Wrapper>
                <Title>Employee Directory</Title>
                {this.state.employees.map(employee => (
                    <EmployeeCard
                        id={employee.id}
                        key={employee.id}
                        name={employee.name}
                        email={employee.email}
                        extension={employee.extension}
                    />
                ))}
            </Wrapper>
        )
    }
};

export default App;

