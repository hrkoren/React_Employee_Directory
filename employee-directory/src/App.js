import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import EmployeeCard from './components/EmployeeCard';
import Home from './components/Home';

function App() {
    return (
        <Router>
            <Route exact path='/' component={Home} />
            <Route exact path='/employee' component={EmployeeCard} />
        </Router>
    )
}

export default App;

