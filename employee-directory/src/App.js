import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Card from './components/Card';
// import Home from './components/Home';

function App() {
    return (
        <Router>
            {/* <Route exact path='/' component={Home} /> */}
            <Route exact path='/employee' component={Card} />
        </Router>
    )
}

export default App;

