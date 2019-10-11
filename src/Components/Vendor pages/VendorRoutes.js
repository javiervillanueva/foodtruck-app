import React from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
import "./Vhome.css";
import { getSessionVendor, LoginVendor, logout } from "../../redux/actions";
import { connect } from "react-redux";
import axios from "axios";
import VendorDrawer from "./VendorDrawer";
import { Switch, Route, Link } from 'react-router-dom';
import VendorSchedule from './VendorSchedule'
import Vhome from '../Vendor pages/Vhome';





 class VendorRoutes extends React.Component {

  componentDidMount() {
    axios.get("/api/logged-in-vendor").then(response => {
      this.props.getSessionVendor(response.data);
      if (response.data.email) this.props.LoginVendor();
      else {
        if (this.props.location.pathname !== "/vendor/login") {
          this.props.history.push("/vendor/login");
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