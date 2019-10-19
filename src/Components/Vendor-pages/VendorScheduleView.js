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

  handleDelete = (id) => { 
      const body = {
          id: id
      }
  axios.post('/api/remove-event', body)
.then()
};

  render() {
   console.log(this.props.events)
let Schedule= this.props.vendorEvents.map(event =>{
    return (
        <div key={event.id}>
          <div className="monday">
            <div>
              {`${event.address1} `}
              {`${event.address2} `}
              {event.city} {event.state}, {event.zipcode}
            </div>
            <div className="bottomCard">
               <Button className="DeleteButton" onClick={() => this.handleDelete(event.id)} >Delete</Button>
             </div>
          </div>
        </div>
      );
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