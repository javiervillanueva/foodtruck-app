import React, { Component } from 'react';
import './reset.css';
import './vendorDisplayCard.css';
import './UserLanding.css';
// import { Link } from 'react-router-dom';
import UserDrawer from './UserDrawer';
import Map from './ReactMapGL';
import {connect} from 'react-redux';
import { logout, getAllVendors} from '../../../redux/actions'
import axios from 'axios';



class UserLanding extends Component {

  handleLogout = (closeDrawer) => {
    // console.log('fire log out button')
     return axios.delete('/api/logout').then(() => {
      this.props.logout();
      alert('successfully logged out')
      closeDrawer();
      this.props.history.push('/');

    })
  }
  componentDidMount(){
    axios.get("/api/get-all-vendor")
   .then(response =>{
       this.props.getAllVendors(response.data);
   });
}

  render() {
      console.log(this.props.vendors)
      let vendorMap=this.props.vendors.map((vendor)=>{
        return(
            <div className="event-summary"  key={vendor.id}>
              <div className="event-profile-container">
                <div className="event-profile"></div>
              </div>
              <div className="event-details">
              {vendor.vendor_name}
              </div>
            </div>
        );
     })
      return (
        <div className="user-landing-body">
          <div className="header">
              <UserDrawer isUserLoggedIn={this.props.isUserLoggedIn}
                          logout={this.handleLogout}/>
          </div>
          <div className="map-container"><Map /></div> 
            <h1>EVENTS</h1>
          <div className="event-list-container">
            {vendorMap}
          </div>
        </div>
      );
  };
};

function mapStateToProps(state) {
  return {
    isUserLoggedIn: state.isUserLoggedIn,
    vendors: state.vendors
  }
}

export default connect(mapStateToProps, {logout: logout, getAllVendors:getAllVendors})(UserLanding);

