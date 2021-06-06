import React, {Component} from 'react';
import EmployeeCard from '../EmployeeCard/index';
import API from '../../utils/API';

class Card extends Component {
    
constructor(props) {
    super(props)
this.state = {
        search: '',
        employees: [],
        employee: '',
        sort: this.sortDirection
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
        .then((res) => this.setState({ ...this.state,
            employees: res.data.results,
        })
        )
        .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const value = event.target.value;
        // const name = event.target.name;
        this.setState({ ...this.state,
            search: value
        });
    };

render() {
    return (
        <div className='container mt-4'>
        <EmployeeCard
        search={this.state.search}
        employee={this.state.employee}
        employees={this.state.employees}
        sort={this.state.sort}        
        />
        </div>
        );
    }
}

export default Card;


