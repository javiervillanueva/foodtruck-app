import React from "react";
import "./Vhome.css";
import { getSessionVendor, LoginVendor, logout } from "../../redux/actions";
import { connect } from "react-redux";
import axios from "axios";
import VendorDrawer from "./VendorDrawer";
import { Switch, Route, Link } from 'react-router-dom';
import VendorSchedule from './VendorSchedule';
import VendorScheduleView from './VendorScheduleView';
import VendorAddMenuItem from './VendorAddMenuItem';

import Vhome from '../Vendor-pages/Vhome';
import Menulist from '../Menu/Menulist';





 class VendorRoutes extends React.Component {

  componentDidMount() {
    axios.get("/api/logged-in-vendor").then(response => {
      this.props.getSessionVendor(response.data);
      if (response.data.email) this.props.LoginVendor();
      else {
        if (this.props.location.pathname !== "/vendor/login") {
          this.props.history.push("/vendor/login");
        }
        if (this.props.location.pathname === "/vendor") {
          this.props.history.push("/vendor/home");
        }
      }
    });
  }

  handleLogout = () => {
    // console.log('fire log out button')
    return axios.delete("/api/logout").then(() => {
      this.props.logout();
      alert("successfully logged out");
      this.props.history.push("/");
    });
  };

  handleSchedule = () => {
      return (
          <Link to='/vendor/schedule' />
      )
  }

  render() {
    return(
      <div>
        {this.props.isVendorLoggedIn && (
          <div>
            <div className="Header">
              {" "}
              <VendorDrawer
                logout={this.handleLogout}
                isVendorLoggedIn={this.props.isVendorLoggedIn}
                handleSchedule={this.handleSchedule}
              />
            </div>
              <Switch>
                <Route path='/vendor/home' component={Vhome}/>
                <Route path='/vendor/schedule' component={VendorSchedule}/>
                <Route path='/vendor/scheduleview' component={VendorScheduleView}/>
                <Route path='/vendor/menu' component={Menulist}/>
                <Route path='/vendor/menuadd' component={VendorAddMenuItem}/>
              </Switch>
            
            
          </div>
        )}
      </div>
    )
  }
};


const mapStateToProps = state => {
    return {
      vendor: state.vendor,
      isVendorLoggedIn: state.isVendorLoggedIn
    };
  };
  
  
  
  export default connect(
    mapStateToProps,
    {
      getSessionVendor: getSessionVendor,
      LoginVendor: LoginVendor,
      logout: logout
    }
  )(VendorRoutes);