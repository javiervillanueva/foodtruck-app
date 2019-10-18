import React from "react";
import axios from "axios";
import "./VendorScheduleView.css";
import { getSessionVendor,getEventsById } from "../../redux/actions";
import { connect } from "react-redux";

class VendorScheduleView extends React.Component {
  componentDidMount() {
    axios.get("/api/get-locations-id").then(response => {
      this.props.getEventsById(response.data);
    });
  } 

  render() {
   console.log(this.props)
   return(
       <div>this is test</div>
   )
  }
}

const mapStateToProps = (state) => {
    return {
      vendor: state.vendor,
    } 
  }
export default connect(mapStateToProps,{getSessionVendor:getSessionVendor,getEventsById:getEventsById})(VendorScheduleView)