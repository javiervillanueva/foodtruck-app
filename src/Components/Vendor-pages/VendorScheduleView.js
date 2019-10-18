import React from "react";
import axios from "axios";
import "./VendorScheduleView.css";
import { getSessionVendor,getEventsById } from "../../redux/actions";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";

class VendorScheduleView extends React.Component {
  componentDidMount() {
    axios.get("/api/get-locations-id").then(response => {
      this.props.getEventsById(response.data);
    });
  } 

  render() {
   console.log(this.props)
   return(
       <div className ="cardWrapper"> 
            <div className="eventDate"></div>
            <div className="eventLocation"></div>
            <div className="bottomCard">
              <Button className="DeleteButton">Delete Event</Button>
            </div>
       </div>
   )
  }
}

const mapStateToProps = (state) => {
    return {
      vendor: state.vendor,
    } 
  }
export default connect(mapStateToProps,{getSessionVendor:getSessionVendor,getEventsById:getEventsById})(VendorScheduleView)