import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getSessionUser, LoginUser, LoginVendor, getSessionVendor } from './redux/actions';
import './App.css';
import Vlogin from './Components/Vendor login/Vendorlogin';
import SignUp from "./Components/SignUp/SignUp"
import UserLogin from "./Components/User login/userlogin"
import UserLanding from './Components/UserLanding/UserLanding';
import UserSignUp from "./Components/userSignUp/userSignUp";
// import UserDrawer from './Components/UserLanding/UserDrawer'
import VendorRoutes from "./Components/Vendor pages/VendorRoutes";
// import { Menu, MenuList } from '@material-ui/core';
// import VendorMenuCard from "./Components/Menu/menu";
import Menulist from "./Components/Menu/Menulist";
import axios from 'axios';
// import VendorSchedule from './Components/Vendor pages/VendorSchedule';


class App extends Component {

  componentDidMount() {
    axios.get('/api/logged-in-user')
      .then(response => {
        this.props.getSessionUser(response.data);
        if (response.data.email) this.props.LoginUser();
      });
    
    axios.get('/api/logged-in-vendor')
    .then(response => {
      this.props.getSessionVendor(response.data);
      if (response.data.email) {
        this.props.LoginVendor();
        // this.props.history.push('/vendor/home')
      } else {
        this.props.history.push('/')
      }
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
          
          <Route path='/user/login' component={UserLogin}/>
          <Route path='/user/signup' component={UserSignUp}/>
          <Route path='/menu' component={Menulist}/>
          <Route exact path='/vendor/login' component={Vlogin}/>
          <Route exact path='/vendor/signup' component={SignUp} />
          {/* { !this.props.isLoggedIn ? 
            // this.props.history.push('/')
            null
            :  */}
          <Route path='/vendor' component={VendorRoutes}/>
          <Route exact path='/user/login' component={UserLogin}/>
          <Route exact path='/user/signup' component={UserSignUp}/>
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
