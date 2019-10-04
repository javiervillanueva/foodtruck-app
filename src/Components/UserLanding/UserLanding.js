import React, { Component } from 'react';
import './reset.css';
import './UserLanding.css';
// import { Link } from 'react-router-dom';
import UserDrawer from './UserDrawer';
import Map from './ReactMapGL';
import {connect} from 'react-redux';


class UserLanding extends Component {

  


  render() {
      return (
        <div className="user-landing-body">
          <div className="header">
              <UserDrawer isLoggedIn={this.props.isLoggedIn}
                          logout={this.props.logout}/>
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
    isLoggedIn: state.isLoggedIn,
    logout: state.logout
  }
}

export default connect(mapStateToProps)(UserLanding);

