import React, { Component } from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import UserService from '../service/UserService';
import axios from "axios";

class WelcomeComponent extends Component {


    constructor(props) {
        super(props)
        this.state = this.props.location.state
    }

    componentDidMount() {
    
        UserService.loadMessage(this.state.jwt).then(response => this.setState({
            message: response.data.message
        }))
        
    }

    render(){
        return (
                <h1>{this.state.message}</h1>
        )
    }
}

export default WelcomeComponent