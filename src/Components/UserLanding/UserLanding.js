import React, { Component } from 'react';
import './reset.css';
import './UserLanding.css';
// import { Link } from 'react-router-dom';
import UserDrawer from './UserDrawer';
import Map from './ReactMapGL';
import {connect} from 'react-redux';
import { logout } from '../../redux/actions'
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


  render() {
      return (
        <div className="user-landing-body">
          <div className="header">
              <UserDrawer isUserLoggedIn={this.props.isUserLoggedIn}
                          logout={this.handleLogout}/>
          </div>
          <div className="map-container"><Map /></div> 
          <div className="event-list-container">
            EVENTS
            <div className="event-summary">
              <div className="event-profile-container">
                <div className="event-profile"></div>
              </div>
              <div className="event-details">DETAILS</div>
            </div>
            <div className="event-summary">
              <div className="event-profile-container">
                <div className="event-profile"></div>
              </div>
              <div className="event-details">DETAILS</div>
            </div>
          </div>
        </div>
      );
  };
};

function mapStateToProps(state) {
  return {
    isUserLoggedIn: state.isUserLoggedIn
  }
}

export default connect(mapStateToProps, {logout: logout})(UserLanding);

