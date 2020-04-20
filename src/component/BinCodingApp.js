import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoginComponent from './LoginComponent';
import WelocmeComponent from './WelocmeComponent';

class BinCodingApp extends Component {
    render() {
        return (  
            <Router>           
                <>
                    <h1>BinCoding Application</h1>
                    <Switch>
                        <Route path="/" exact component={LoginComponent} />
                        <Route path="/welcome" component={WelocmeComponent} /> 
                    </Switch>
                </>
            </Router>   
        )
    }
}

export default BinCodingApp