import React from 'react';
import EmployeeCard from '../EmployeeCard/index';
import API from '../../utils/API';

class Card extends Component {
    state = {
        search: '',
        employees: [],
        employee: '',
        sort: this.sortDirection
    };

    get sortDirection() {
        return {
            name: '',
            email: ''
        };
    }

    componentDidMount() {
        API.getEmployees()
        .then((res) => this.setState({
            employees: res.data.results,
        })
        )
        .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const value = event.target.value;
        // const name = event.target.name;
        this.setState({
            search: value
        });
    };

render() {
    return (
        <div className='container mt-4'>
        <EmployeeCard
        state={this.state}
        sortBy={this.sortBy}        
        />
        </div>
        );
    }
}

export default Card;


