import React, { Component } from 'react';
import './reset.css';
import './vendorDisplayCard.css';
import './UserLanding.css';
// import { Link } from 'react-router-dom';
<<<<<<< HEAD
import UserDrawer from './UserDrawer';
import Map from './ReactMapGL';
import {connect} from 'react-redux';
import { logout, getAllVendors} from '../../../redux/actions'
import axios from 'axios';



class UserLanding extends Component {

  handleLogout = (closeDrawer) => {
=======
import UserDrawer from "./UserDrawer";
import Map from "./ReactMapGL";

// import MapContainer from './GoogleMap';
import { connect } from "react-redux";
import { logout, getTodaysEvents } from "../../../redux/actions";
import axios from "axios";

class UserLanding extends Component {
  state={
    cardMarker: {
      lat: 40.4387154,
      lng: -111.8922966
    },
    loading: false
  }

  handleLogout = closeDrawer => {
>>>>>>> master
    // console.log('fire log out button')
     return axios.delete('/api/logout').then(() => {
      this.props.logout();
      alert('successfully logged out')
      closeDrawer();
<<<<<<< HEAD
      this.props.history.push('/');
=======
      this.props.history.push("/");
    });
  };
  componentDidMount() {

    this.getGeoCode();
    const date = new Date();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
>>>>>>> master

    })
  }
  componentDidMount(){
    axios.get("/api/get-all-vendor")
   .then(response =>{
       this.props.getAllVendors(response.data);
   });
}

  getGeoCode = (address) => {
    console.log('yo yo yo')
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyA7C_JIMTFkb3zGUydDU_RdWoAkNvtXBVw`)
      .then(response => {
        console.log('response', response.data)
        this.setState({cardMarker: response.data.results[0].geometry.location})
        console.log(this.state)
      })
      .catch(error => console.log(error));
  }

  

  render() {
<<<<<<< HEAD
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
=======
    console.log(this.props.events);
    if (this.state.briostack === {}){
      return (
        console.log('loading')
      )
    } else {
      let vendorMap = this.props.events.map(events => {
        let address = `${events.address1} ${events.address2}, ${events.city}, ${events.state} ${events.zipcode}`

        return (
          <div className="event-summary" key={events.vendor_id} onClick={() => this.getGeoCode(address)}>
            <div className="event-profile-container">
              <div className="event-profile"></div>
            </div>
            <div className="event-details">
              <div>{events.vendor_name}</div>
              <div>{events.address1}</div>
              <div>{events.address2}</div>
              <div>
                {events.city} {events.state}, {events.zipcode}
              </div>
            </div>
>>>>>>> master
          </div>
        );
      });
      return (
        <div className="user-landing-body">
          <div className="header">
            <UserDrawer
              isUserLoggedIn={this.props.isUserLoggedIn}
              logout={this.handleLogout}
            />
          </div>
          <div className="map-container">
            <Map  lat={this.state.cardMarker.lat}
                  lng={this.state.cardMarker.lng}/>
          </div>
          <h1>EVENTS</h1>
          <div className="event-list-container">{vendorMap}</div>
        </div>
      );
<<<<<<< HEAD
  };
};
=======
    };
  }
}
>>>>>>> master

function mapStateToProps(state) {
  return {
    isUserLoggedIn: state.isUserLoggedIn,
    vendors: state.vendors
  }
}

export default connect(mapStateToProps, {logout: logout, getAllVendors:getAllVendors})(UserLanding);

