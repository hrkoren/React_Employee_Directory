import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Card from './components/Card';

function App() {
    return (
        <Router>
            <Route exact path='/' component={Card} />
        </Router>
    )
}

export default App;

