import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import EmployeeCard from './src/components/EmployeeCard/index';

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Wrapper>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/employee' component={EmployeeCard} />
                </Wrapper>
            </div>
        </Router>
    )
}

export default App;

