import React, { Component } from "react";
import "./reset.css";
import "./vendorDisplayCard.css";
import "./UserLanding.css";
// import { Link } from 'react-router-dom';
import UserDrawer from "./UserDrawer";
import Map from "./ReactMapGL";
import { connect } from "react-redux";
import { logout, getTodaysEvents } from "../../../redux/actions";
import axios from "axios";

class UserLanding extends Component {
  handleLogout = closeDrawer => {
    // console.log('fire log out button')
    return axios.delete("/api/logout").then(() => {
      this.props.logout();
      alert("successfully logged out");
      closeDrawer();
      this.props.history.push("/");
    });
  };
  componentDidMount() {
    const date = new Date();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();

    const todaysDate = `${year}-${month}-${day}`;
    const body = {
      todaysDate: todaysDate
    };
    console.log(body);
    axios
      .post("/api/get-locations-date", body)
      .then(response => {
        this.props.getTodaysEvents(response.data);
        console.log(response.data);
      })
      .catch(console.log);
  }

  render() {
    console.log(this.props.events);
    let vendorMap = this.props.events.map(events => {
      return (
        <div className="event-summary" key={events.vendor_id}>
          <div className="event-profile-container">
            <div className="event-profile"></div>
          </div>
          <div className="event-details">
            <div className="vendor_name">{events.vendor_name}</div>
            <div className="address1">{events.address1}</div>
            <div className="address2" >{events.address2}</div>
            <div className="address3">
              {events.city} {events.state}, {events.zipcode}
            </div>
          </div>
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
          <Map />
        </div>
        
        
        <div className="event-list-container">
        <h1 className="nearMe">Trucks Near Me</h1>
        {vendorMap}
        </div>
        
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isUserLoggedIn: state.isUserLoggedIn,
    vendors: state.vendors,
    events: state.events
  };
}

export default connect(
  mapStateToProps,
  {
    logout: logout,
    getTodaysEvents: getTodaysEvents
  }
)(UserLanding);
