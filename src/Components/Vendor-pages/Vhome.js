import React from "react";
import "./Vhome.css";
import {
  getSessionVendor,
  LoginVendor,
  logout,
  getEventsById
} from "../../redux/actions";
import { connect } from "react-redux";
import axios from "axios";

class Vhome extends React.Component {
  componentDidMount() {
    axios.get("/api/logged-in-vendor").then(response => {
      this.props.getSessionVendor(response.data);
      if (response.data.email) this.props.LoginVendor();
      else {
        if (this.props.location.pathname !== "/vendor/login") {
          this.props.history.push("/");
        }
      }
    });
    axios.get("/api/get-locations-id").then(response => {
      this.props.getEventsById(response.data);
    });
  }

  render() {
    console.log("hello there");
    console.log(this.props);

    console.log(this.props.events);
    let Schedule = this.props.vendorEvents.slice(0, 3).map(event => {
      return (
        <div key={event.id}>
          <div className="monday">
            <div>
              {`${event.address1} `}
              {`${event.address2} `}
              {event.city} {event.state}, {event.zipcode}
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="Vhome">
        <div className="Body">
          <div className="mainsection">
            <div className="Upper">
              <div className="Img-icon"></div>
              <div className="VendorName">{this.props.vendor.vendor_name}</div>
              <div className="today"></div>
            </div>
            <div className="Lower">
              <h1 className="Schedule">Schedule</h1>
              <div>{Schedule}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    vendor: state.vendor,
    isVendorLoggedIn: state.isVendorLoggedIn,
    vendorEvents: state.vendorEvents
  };
};

export default connect(
  mapStateToProps,
  {
    getSessionVendor: getSessionVendor,
    LoginVendor: LoginVendor,
    logout: logout,
    getEventsById: getEventsById
  }
)(Vhome);
