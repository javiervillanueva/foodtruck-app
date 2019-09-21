import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };
  handleLogin = async () => {
    try {
      const body = {
        username: this.state.username,
        password: this.state.password
      };
      if (body.username && body.password) {
        await axios.post("/", body);
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
            <input
              value={this.state.username}
              onChange={this.handleChange}
              name="username"
              className="username"
              type="text"
              placeholder="username"
            />
            <input
              value={this.state.password}
              onChange={this.handleChange}
              name="password"
              className="username"
              type="password"
              placeholder="password"
            />
            <div className="submit" onClick={this.handleLogin}>
              <span>Login</span>
            </div>
            <Link className="submit" to="/signup">
              Signup
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;