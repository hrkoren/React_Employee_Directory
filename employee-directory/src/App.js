import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import EmployeeCard from './components/EmployeeCard/index';
import Home from './components/Home/index';

function App() {
    return (
        <Router>


            <Route exact path='/' component={Home} />
            <Route exact path='/employee' component={EmployeeCard} />


        </Router>
    )
}

export default App;

