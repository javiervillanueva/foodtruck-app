import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Userlogin.css";

class Login extends React.Component {
  state = {
    email: "",
    password: ""
  };
  handleLogin = async () => {
    try {

      if (this.state.email && this.state.password) {
        await axios.post("/api/user-login",this.state );
        this.props.history.push("/");
      }else{
          alert('Please enter log in credentials')
      }
    } catch (error) {
      alert("Invalid Log in credentials ");
    }
  };
  handleChange = e => this.setState({ [e.target.name]: e.target.value });

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
            />
            <div className="submit" onClick={this.handleLogin}>
              <span>Login</span>
            </div>
            <Link className="submit" to="/user/signup">
              Signup for Foodie Account
            </Link> 
             <Link className="submit" to="/vendor/signup">
              Signup for Vendor Account
            </Link> 
          </div>
        </div>
      </div>
    );
  }
}

export default Login;