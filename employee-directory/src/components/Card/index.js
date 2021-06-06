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
        .catch(err => consol.log(err));
    };

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };

render() {
    return (
        <EmployeeCard>
        state={this.state}
        sortBy={this.sortBy}        
        </EmployeeCard>
        );
    }
}

export default Card;


