import React, { Component } from 'react';
// import {connect} from 'react-redux';


class VendorDisplayCard extends Component{
    render() {
        return(
            <div className="event-summary">
              <div className="event-profile-container">
                <div className="event-profile"></div>
              </div>
              <div className="event-details">DETAILS</div>
            </div>
        );
     }
};
  
  export default VendorDisplayCard