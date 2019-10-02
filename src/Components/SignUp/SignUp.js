import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./signUp.css";

class Signup extends React.Component {
  state = {
    vendorName: "",
    ownerName: "",
    email: "",
    password:""
  };

  handleSignup = async () => {
    try {
      if (this.state.vendorName && this.state.ownerName && this.state.email&&this.state.password) {
        await axios.post("/api/vendor-signup", this.state);
        alert("Successful, go to Login?");
        this.props.history.push("/vendor/login");
      } else {
        alert("Please fill out all the info boxes");
      }
    } catch (error) {
      alert("Error, please try again");
    }
  };
  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div className="App">
        <div className="Wrapper">
          <div className="modal">
          <h1>Create Account</h1>
            <input
              value={this.state.vendorName}
              onChange={this.handleChange}
              name="vendorName"
              className="username"
              type="text"
              placeholder="Vendor Name"
            />
            <input
              value={this.state.ownerName}
              onChange={this.handleChange}
              name="ownerName"
              className="username"
              type="text"
              placeholder="Owner's Name"
            />
            <input
              value={this.state.email}
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
            <div className="submit" onClick={this.handleSignup}>
              Create Account
            </div>
            <Link className="submit" to="/vendor/login">
              {" "}
              Go to Login
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
