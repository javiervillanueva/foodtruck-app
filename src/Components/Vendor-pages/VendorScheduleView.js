import React from "react";
import axios from "axios";
import "./VendorScheduleView.css";
import { getSessionVendor, getEventsById } from "../../redux/actions";
import { connect } from "react-redux";
import { Fab } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";

class VendorScheduleView extends React.Component {
  componentDidMount() {
    axios.get("/api/get-locations-id").then(response => {
      this.props.getEventsById(response.data);
      console.log(response.data);
    });
  }

  handleDelete = id => {
    const body = {
      id: id
    };
    axios.post("/api/remove-event", body).then(() => {
      alert("deleted event succesfully");
      window.location.reload();
    });
  };

  render() {
    console.log(this.props.events);
    let Schedule = this.props.vendorEvents.map(event => {
      return (
        <div key={event.id}>
          <div className="eventWrapper">
            <div className="eventAddress">
              {`${event.address1} `}
              {`${event.address2} `}
              {event.city} {event.state}, {event.zipcode}
            </div>
            <div className="bottomCardView">
              <IconButton size="small">
                <DeleteIcon onClick={() => this.handleDelete(event.id)} />
              </IconButton>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className="entireSchedule">
        <div className="wrapperCard">{Schedule}</div>
        <Fab className="addScheduleEvent" href="/vendor/schedule">
          <AddIcon />
        </Fab>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    vendor: state.vendor,
    vendorEvents: state.vendorEvents
  };
};
export default connect(
  mapStateToProps,
  { getSessionVendor: getSessionVendor, getEventsById: getEventsById }
)(VendorScheduleView);
