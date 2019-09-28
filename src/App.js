import React, { Component } from 'react';
import { BrowserRouter as Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateUser } from './redux/actions';
import './App.css';
import Vlogin from './Components/Vendor login/Vendorlogin';
import SignUp from "./Components/SignUp/SignUp"
import UserLogin from "./Components/User login/userlogin"
import UserLanding from './Components/UserLanding/UserLanding';
import UserSignUp from "./Components/userSignUp/userSignUp";
import Vhome from "./Components/Vendor pages/Vhome";


class App extends Component {

  componentDidMount() {
    const user = {
      name: 'sam',
      height: '5ft'
    }
    this.props.updateUser(user);
  }

  render () {

    console.log(this.props);


    return (
      <div className="App">
     
    
       
        <Switch>
          <Route exact path='/' component={UserLanding}/>
          <Route path='/vendor/login' component={Vlogin}/>
          <Route path='/vendor/signup' component={SignUp} />
          <Route path='/vendor/home' component={Vhome}/>
          <Route path='/user/login' component={UserLogin}/>
          <Route path='/user/signup' component={UserSignUp}/>
        </Switch>
      </div>
    );

  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, {updateUser: updateUser})(withRouter(App));
