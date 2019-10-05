import React from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
import "./Vhome.css";
import { getSessionVendor, LoginVendor, logout } from '../../redux/actions';
import { connect } from 'react-redux';
import axios from 'axios';
import VendorDrawer from './VendorDrawer';
class Vhome extends React.Component {

  componentDidMount() {
    axios.get('/api/logged-in-vendor')
      .then(response => {
        console.log('something')
        this.props.getSessionVendor(response.data);
        if (response.data.email) this.props.LoginVendor();
        else {
          console.log('asdflkj')
          if (this.props.location.pathname !== '/vendor/login') {
            this.props.history.push('/')
          }

        }
      });
  }

  handleLogout = (closeDrawer) => {
    // console.log('fire log out button')
     return axios.delete('/api/logout').then(() => {
      this.props.logout();
      alert('successfully logged out')
      // closeDrawer();
      this.props.history.push('/');

    })
  }

  render() {
    console.log('hello there')
    return (
      <div className="Vhome">
          <div className="Header">  <VendorDrawer logout={this.handleLogout}
                        isLoggedIn={this.props.isLoggedIn} /></div> 
          <div className="Body">
            <div className="mainsection">
              <div className="Upper">
                <div className="Img-icon"></div>
                <div className="VendorName">{this.props.vendor.vendor_name}</div>
                <div className="today"></div>
              </div>
              <div className="Lower">
                <h1 className="Schedule">Schedule</h1>
                <div className ="monday">

                </div>
                <div className ="">

                </div>
                <div className ="monday">

                </div>  
              
              </div>
            </div>
          </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    vendor: state.vendor,
    isVendorLoggedIn: state.isVendorLoggedIn
  }
}

export default connect(mapStateToProps, {getSessionVendor: getSessionVendor, LoginVendor: LoginVendor, logout: logout})(Vhome);
