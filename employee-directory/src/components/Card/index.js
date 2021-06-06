import React from 'react';
import EmployeeCard from '../EmployeeCard/index';
import API from '../../utils/API';

class Card extends Component {
    state = {
        search: '',
        employees: [],
        // filteredEmployees: [],
        sortDirections: this.sortDirection
    };

    get sortDirection() {
        return {
            name: '',
            email: ''
        };
    }

    componentDidMount() {
        this.searchEmployees('');
    }
    searchEmployees = query => {
        API.search(query)
        .then(res => this.setState({result: res.data}))
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
        <Card>
        <h1 className='heading'>Employee Table</h1>
        </Card>
    );
}
}

export default Card;


