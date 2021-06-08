import React, { Component } from 'react';
import EmployeeCard from '../EmployeeCard';
import Search from '../Search';
import Header from '../Header';
import API from '../../utils/API';

class Card extends Component {

    constructor(props) {
        super(props)
        this.state = {
            search: '',
            employees: [],
            employee: '',
            sort: this.sortDirection,
            filterEmployees: []
        };
    }
    get sortDirection() {
        return {
            name: '',
            email: ''
        };
    }

    componentDidMount() {
        API.getEmployees()
            .then((res) => this.setState({
                // ...this.state,
                employees: res.data.results,
                filterEmployees: res.data.results
            })
            )
            .catch(err => console.log(err));
    };

    handleInputChange = (event) => {
        
        const searchTerm = event.target.value.toLowerCase()
        //  console.log(searchTerm);
        const filterEmployees = this.state.employees.filter((employee) => {
            return (employee.name.last.toLowerCase().indexOf(searchTerm) !== -1)
        }) 
        this.setState({
            search: searchTerm,
            filterEmployees
        });
    };

    render() {
        // console.log(this.state.employees)
        return (
            <>
                <Header />
                <Search
                    handleInputChange={this.handleInputChange}
                    search={this.state.search}
                />
                <div className='container mt-4'>
                    <EmployeeCard
                        employee={this.state.employee}
                        employees={this.state.filterEmployees}
                        sort={this.state.sort}
                    />
                </div>
            </>
        );
    }
}

export default Card;


