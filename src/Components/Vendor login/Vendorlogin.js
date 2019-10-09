import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { getSessionVendor, LoginVendor } from '../../redux/actions';
import { connect } from 'react-redux';
import "./Vlogin.css";

class Login extends React.Component {
  state = {
    email: "",
    password: ""
  };
  handleLogin = async () => {
    try {
      if (this.state.email && this.state.password) {
       const loginResult= await axios.post("/api/vendor-login", this.state);
        this.props.getSessionVendor(loginResult.data)
        this.props.LoginVendor();
        alert('successfully logged in!');
        this.props.history.push("/vendor");
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
          <div className="modal4">
            <h1>Log in To Vendor Account</h1>
            <input
              value={this.state.username}
              onChange={this.handleChange}
              name="Email"
              className="username"
              type="text"
              placeholder="email"
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
            <Link className="link" to="/user/login">Login in to User Account</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { getSessionVendor: getSessionVendor, LoginVendor: LoginVendor})(Login);