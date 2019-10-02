import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./userSignUp.css";

class UserSignUp extends React.Component{
    state = {
        firstName: "",
        email: "",
        password:""
      };

      handleSignup = async () => {
        try {
          if (this.state.firstName && this.state.password && this.state.emailAddress) {
            await axios.post("/api/user-signup", this.state);
            alert("Successful, go to Login?");
            this.props.history.push("/user/login");
          } else {
            alert("Please fill out all the info boxes");
          }
        } catch (error) {
          alert("Error, please try again");
        }
      };
      handleChange = e => this.setState({ [e.target.name]: e.target.value });
    
render(){
    console.log(this.state)
 return(
<div className="App">
        <div className="Wrapper">
          <div className="modal">
          <h1>Create Account</h1>
            <input
              value={this.state.firstName}
              onChange={this.handleChange}
              name="firstName"
              className="username"
              type="text"
              placeholder="First Name"
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
            <Link className="submit" to="/user/login">
              {" "}
              Go to Login
            </Link>
          </div>
        </div>
      </div>
 )
}
};

export default UserSignUp;