import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getSessionUser, LoginUser, LoginVendor, getSessionVendor } from './redux/actions';
import './Components/User-Pages/UserLanding/reset.css';
import './App.css';
import Vlogin from './Components/Vendor-pages/Vendor-login/Vendorlogin';
import SignUp from "./Components/Vendor-pages/SignUp/SignUp"
import UserLogin from "./Components/User-Pages/User login/userlogin"
import UserLanding from './Components/User-Pages/UserLanding/UserLanding';
import UserSignUp from "./Components/User-Pages/userSignUp/userSignUp";
import VendorRoutes from "./Components/Vendor-pages/VendorRoutes";
import UserSendMessage from "./Components/User-Pages/UserSendMessage/UserSendMessage";
import UserFaves from "./Components/User-Pages/UserFaves/userFaves";
import axios from 'axios';



class App extends Component {

  componentDidMount() {
    axios.get('/api/logged-in-user')
      .then(response => {
        this.props.getSessionUser(response.data);
        if (response.data.email) this.props.LoginUser();
      });
  
}

  render () {

    return (
      <div className="App">
     
        <Switch>
          <Route exact path='/' component={UserLanding}/>
          <Route path='/vendor/login' component={Vlogin}/>
          <Route path='/vendor/signup' component={SignUp} />
          <Route path='/user/login' component={UserLogin}/>
          <Route path='/user/signup' component={UserSignUp}/>
          <Route path='/user/message' component={UserSendMessage}/>
          <Route path='/vendor' component={VendorRoutes}/>
          <Route path='/user/signup' component={UserSignUp}/>
          <Route exact path='/user/login' component={UserLogin}/>
          <Route exact path='/user/signup' component={UserSignUp}/>
          <Route path='/user/favorites' component={UserFaves}/>
        </Switch>
      </div>
    );

  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    isUserLoggedIn: state.isUserLoggedIn,
    isVendorLoggedIn: state.isVendorLoggedIn,
    vendor: state.vendor
  }
}

export default connect(mapStateToProps, {getSessionUser: getSessionUser, LoginUser: LoginUser, LoginVendor: LoginVendor, getSessionVendor: getSessionVendor})(withRouter(App));
