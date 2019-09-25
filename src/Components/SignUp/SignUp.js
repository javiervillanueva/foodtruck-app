import React, { Component } from 'react';
import "./signUp.css"
export default class SignUp extends Component {

    state={
        userName: "",
        password: ""
    }

    handleChange = (event)=>{
        const key = event.target.id;
        const value = event.target.value;
        // n
        this.setState({
            [key]: value
        })
    }
    
    render() {
        return (
            <div className ="wrapper">
            <div className ="form-wrapper ">
                <h1 className="LogIn">Create Account</h1>
                <form  noValidate>
                  
                    <div className ="Email" >
                        <lable> Name </lable>
                        <input id="userName"
                        type="text"
                         className="" 
                         placeholder="Name"
                         type =" text"
                         name="Email"
                         onChange={this.handleChange}
                        noValidate/>
                    </div>
                    <div className ="Password" >
                        <lable> Password </lable>
                        <input 
                        id ="password" 
                        type="text"
                         className="" 
                         placeholder="Password"
                         type =" text"
                         name="Password"
                         onChange={this.handleChange}
                        noValidate/>
                    </div>
                    <div className ="Email" >
                        <lable> Email </lable>
                        <input id="Email"
                        type="text"
                         className="" 
                         placeholder="Email"
                         type =" text"
                         name="Email"
                         onChange={this.handleChange}
                        noValidate/>
                    </div>
                   
                </form> 
                
            </div>
        </div>
        )
    }
}
