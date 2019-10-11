import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import axios from "axios";
// import { Link } from "react-router-dom";
import "./VendorScheduleView.css";
import { getSessionVendor, LoginVendor, logout } from '../../redux/actions';
import { connect } from 'react-redux';
// import VendorDrawer from '../Vendor pages/VendorDrawer';
// import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles(theme => (
    {
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
    textField: 
    {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }));




class VendorScheduleView extends React.Component {

    // state = {
    //     address1: "",
    //     address2: "",
    //     city: "",
    //     state: "",
    //     zipcode: "",
    //     date: ""
    // };

    // componentDidMount() {
    //         axios.get('/api/logged-in-vendor')
    //           .then(response => {
    //             this.props.getSessionVendor(response.data);
    //             if (response.data.email) this.props.LoginVendor();
    //           });
    //         axios.get("/api/get-vendor-locations")
    //       }


    // handleChange = event => this.setState({
    //     [event.target.name]: event.target.value
    // })

    // handleSubmit = async () => {
    //     try {
    //       if (this.state.address1 && this.state.city && this.state.state && this.state.zipcode && this.state.date) {
    //        await axios.post("/api/add-vendor-location", this.state);
    //         alert("added schedule event");
    //         this.setState ({
    //           address1: "",
    //           address2: "",
    //           city: "",
    //           state: "",
    //           zipcode: "",
    //           date: "2019-01-01"
    //         })
    //       } else {
    //         alert('No blank fields allowed');
    //       }
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

//   componentDidMount() {
//     axios.get('/api/logged-in-vendor')
//       .then(response => {
//         this.props.getSessionVendor(response.data);
//         if (response.data.email) this.props.LoginVendor();
//       });
//   }

render() {
    console.log(this.state);
      return (
      <div className="VendorScheduleView">
          <div className="ScheduleBodyView">
          
            <div className="vsmainsectionview">
              <div className="vsLowerview">
                <h1 className="vsScheduleview">Hello</h1>
                <div className ="vsmondayview">
                    {/* {this.state.address1}
                    {this.state.address2}
                    {this.state.city}
                    {this.state.state}
                    {this.state.zipcode}
                    {this.state.date} */}
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    vendor: state.vendor,
    isLoggedIn: state.isLoggedIn
  } 
}


export default connect(mapStateToProps, {getSessionVendor: getSessionVendor, LoginVendor: LoginVendor, logout: logout})(VendorScheduleView);
