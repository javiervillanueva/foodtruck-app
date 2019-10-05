import React from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
import "./Vhome.css";
import { getSessionVendor, login, logout } from '../../redux/actions';
import { connect } from 'react-redux';
import axios from 'axios';
import VendorDrawer from './VendorDrawer';
class Vhome extends React.Component {

  componentDidMount() {
    axios.get('/api/logged-in-vendor')
      .then(response => {
        this.props.getSessionVendor(response.data);
        if (response.data.email) this.props.login();
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
    return (
      <div className="Vhome">
        { !this.props.isLoggedIn ? 
          this.props.history.push('/')
          : 
          <div className="Body">
          <VendorDrawer logout={this.handleLogout}
                        isLoggedIn={this.props.isLoggedIn} />
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
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    vendor: state.vendor,
    isLoggedIn: state.isLoggedIn
  }
}

export default connect(mapStateToProps, {getSessionVendor: getSessionVendor, login: login, logout: logout})(Vhome);
