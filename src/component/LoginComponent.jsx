import React, { Component } from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import UserService from '../service/UserService';
import axios from "axios";

class LoginComponent extends Component {


    constructor(props) {
        super(props)
        this.state = {
            username:"",
            password:"",
            jwt: "",
            message: null
        }
        this.generateJwt = this.generateJwt.bind(this)
    }

    componentDidMount() {
        // this.generateJwt();
    }

    generateJwt(event) {

        var self = this;
        var payload = {
            "username":this.state.username,
            "password":this.state.password
        }
        UserService.authenticateUser(payload)
            .then(
                response => {
                    console.log(response.data);
                    this.setState({
                        jwt: response.data.token,
                        message: response.ok
                    })
                    this.render();
                    this.props.history.push({
                        pathname: '/welcome',
                        state: {
                          jwt: this.state.jwt,
                          message: ''
                        }
                      })


                    
                }
            )
    }


    render(){
        return (
                <div>
                    <MuiThemeProvider>
                    <div>
                    <AppBar
                        title="Login"
                    />
                        <TextField
                        hintText="Enter your Username"
                        floatingLabelText="Username"
                        onChange = {(event,newValue) => this.setState({username:newValue})}
                        />
                    <br/>
                        <TextField
                        type="password"
                        hintText="Enter your Password"
                        floatingLabelText="Password"
                        onChange = {(event,newValue) => this.setState({password:newValue})}
                        />
                        <br/>
                        <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.generateJwt(event)}/>
                    </div>
                    </MuiThemeProvider>
                </div>
        )
    }
}

const style = {
    margin: 15,
   };

export default LoginComponent