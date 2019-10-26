import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserFaves, getTodaysEvents } from "../../../redux/actions";
import axios from "axios";

class UserFaves extends Component {
  componentDidMount() {
    const date = new Date();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();

    const todaysDate = `${year}-${month}-${day}`;
    const body = {
      todaysDate: todaysDate,
      id: this.props.getUserFaves.vendor_id
    };
    axios.get("/api/get-users-faves").then(response => {
      this.props.getUserFaves(response.data);
    });
    axios
      .post("/api/get-locations-date", body)
      .then(results => {
        this.props.getTodaysEvents(results.data);
      })
      .catch(console.error);
  }

  render() {
    console.log(this.props);

    return <div className="favesPage">hello</div>;
  }
}

const mapStateToProps = state => {
  return {
    userFaves: state.userFaves,
    events: state.events
  };
};

export default connect(
  mapStateToProps,
  { getUserFaves: getUserFaves, getTodaysEvents: getTodaysEvents }
)(UserFaves);
