import React, { Component } from 'react';
import { BrowserRouter as Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getSessionUser, login } from './redux/actions';
import './App.css';
import Vlogin from './Components/Vendor login/Vendorlogin';
import SignUp from "./Components/SignUp/SignUp"
import UserLogin from "./Components/User login/userlogin"
import UserLanding from './Components/UserLanding/UserLanding';
import UserSignUp from "./Components/userSignUp/userSignUp";
// import UserDrawer from './Components/UserLanding/UserDrawer'
import Vhome from "./Components/Vendor pages/Vhome";
import axios from 'axios';


class App extends Component {

  componentDidMount() {
    axios.get('/api/logged-in-user')
      .then(response => {
        this.props.getSessionUser(response.data);
        if (response.data.email) this.props.login();
      });
    
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
    user: state.user,
    isLoggedIn: state.isLoggedIn
  }
}

export default connect(mapStateToProps, {getSessionUser: getSessionUser, login: login})(withRouter(App));
