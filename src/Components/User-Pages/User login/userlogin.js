import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { getSessionUser, LoginUser } from '../../../redux/actions';
import {connect} from 'react-redux';
import "./Userlogin.css";
import { Button } from '@material-ui/core';

class Login extends React.Component {
  state = {
    email: "",
    password: ""
  };
  handleLogin = async () => {
    try {

      if (this.state.email && this.state.password) {
        let loginResult = await axios.post("/api/user-login", this.state );
        this.props.getSessionUser(loginResult.data);
        this.props.LoginUser();
        alert('successfully logged in!');
        this.props.history.push("/");
      }else{
          alert('Please enter log in credentials')
      }
    } catch (error) {
      alert("Invalid Log in credentials ");
    }
  };
  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  onKeyPress = (e) => {
    if (e.which === 13) {
        this.handleLogin();
    }
}

  render() {
    return (
      <div className="App">
        <div className="Wrapper">
          <div className="modal2">
              <div className="logoBox"></div>
              <h1 className="logInto" >Log in to User Account</h1>
            <input
              value={this.state.username}
              onChange={this.handleChange}
              name="email"
              className="username"
              type="text"
              placeholder="Email"
            />
            <input
              value={this.state.password}
              onChange={this.handleChange}
              name="password"
              className="username"
              type="password"
              placeholder="Password"
              onKeyPress={this.onKeyPress}
            />
            <Button className="submit" onClick={this.handleLogin} variant="contained" color="default">
              Login
            </Button>
            <Link className="link" to="/user/signup">
              Signup as User
            </Link> 
             <Link className="link"to="/vendor/signup">
              Signup as Vendor
            </Link> 
            <Link className="link" to="/vendor/login">Login to Vendor Account</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, {LoginUser: LoginUser, getSessionUser: getSessionUser})(Login);