import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { getSessionUser, login } from '../../redux/actions';
import {connect} from 'react-redux';
import "./Userlogin.css";

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
        this.props.login();
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
          <div className="modal">
              <h1>Log in to User Account</h1>
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
            <div className="submit" onClick={this.handleLogin}>
              <span>Login</span>
            </div>
            <Link className="link" to="/user/signup">
              Signup for Foodie Account
            </Link> 
             <Link className="link"to="/vendor/signup">
              Signup for Vendor Account
            </Link> 
            <Link className="link" to="/vendor/login">login in to Vendor Account</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, {login: login, getSessionUser: getSessionUser})(Login);