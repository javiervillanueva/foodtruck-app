import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getAllVendors}from "../../redux/actions"
import './vendorDisplayCard.css';

class VendorDisplayCard extends Component{
    
    render() {
        return(
            <div className="event-summary">
              <div className="event-profile-container">
                <div className="event-profile"></div>
              </div>
              <div className="event-details">
              <div>{this.props.vendors.length && this.props.vendors.vendor_name}</div>
              </div>
            </div>
        );
     }
};
  
function mapStateToProps(state){
    return{
        vendors: state.vendors
    }
}
  export default connect(mapStateToProps,{getAllVendors:getAllVendors})(VendorDisplayCard)