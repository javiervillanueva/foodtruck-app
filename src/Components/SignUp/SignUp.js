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
        //update to enpoints when avalible
      const body = {
        vendorName: this.state.vendorName,
        ownerName: this.state.ownerName,
        email: this.state.email,
        password: this.state.email
      };
      if (body.username && body.password && body.fullName) {
        await axios.post("/api/vendor-signup", body);
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
              name="vendor name"
              className="username"
              type="text"
              placeholder="Vendor Name"
            />
            <input
              value={this.state.ownerName}
              onChange={this.handleChange}
              name="Owner's name"
              className="username"
              type="text"
              placeholder="Owner's Name"
            />
            <input
              value={this.state.email}
              onChange={this.handleChange}
              name="Email"
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
