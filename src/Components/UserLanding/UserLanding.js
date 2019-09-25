import React, { Component } from 'react';
import './reset.css';
import './UserLanding.css';

export default class UserLanding extends Component {
    render() {
        return (
          <div className="user-landing-body">
            <div className="header">
                <button>BURGER</button>
                <button>LOGIN</button>
            </div>
            <div className="map-container">MAP CONTAINER</div> 
            <div className="event-list-container">
              EVENTS
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