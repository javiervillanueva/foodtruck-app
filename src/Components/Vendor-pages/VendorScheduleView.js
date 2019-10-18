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
      console.log(response.data)
    });
  } 

  render() {
   console.log(this.props.events)
let Schedule= this.props.vendorEvents.map(event =>{
    return(
        <div className ="cardWrapper" key={event.id}> 
             <div className="eventDate">{event.date}</div>
             <div className="eventLocation">
             <div>{event.address1}</div>
             <div>{event.address2}</div>
             <div>{event.state} {event.city}, {event.zipcode}</div>
             </div>
             <div className="bottomCard">
               <Button className="DeleteButton">Delete Event</Button>
             </div>
        </div>
    )
});
return(
<div>{Schedule}</div>
)
  }
}

const mapStateToProps = (state) => {
    return {
      vendor: state.vendor,
      vendorEvents:state.vendorEvents
    } 
  }
export default connect(mapStateToProps,{getSessionVendor:getSessionVendor,getEventsById:getEventsById})(VendorScheduleView)