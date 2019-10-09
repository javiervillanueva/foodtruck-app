import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import axios from "axios";
// import { Link } from "react-router-dom";
import "./VendorSchedule.css";
import { getSessionVendor, logout } from '../../redux/actions';
import { connect } from 'react-redux';
import VendorDrawer from '../Vendor pages/VendorDrawer';
import TextField from '@material-ui/core/TextField';
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




class VendorSchedule extends React.Component {

    state = {
        address1: "",
        address2: "",
        city: "",
        state: "",
        zipcode: "",
        date: ""
    };

    handleDateChange = event => this.setState({
        [event.target.name]: event.target.value
    })

    handleChange = event => this.setState({
        [event.target.name]: event.target.value
    })

    handleSubmit = async () => {
        try {
            await axios.post("/api/add-vendor-location", this.state);
            alert("added schedule event");
            this.setState ({
              address1: "",
              address2: "",
              city: "",
              state: "",
              zipcode: "",
              date: ""
            })
        } catch (error) {
            console.log(error)
        }
    }

  componentDidMount() {
    axios.get('/api/logged-in-vendor')
      .then(response => {
        this.props.getSessionVendor(response.data);
        // if (response.data.email) this.props.login();
      });
  }

render() {
    console.log(this.state)
    return (
      <div className="VendorSchedule">
          <div className="ScheduleBody">
          <VendorDrawer logout={this.handleLogout}
                        isLoggedIn={this.props.isLoggedIn} />
            <div className="vsmainsection">
              <div className="vsLower">
                <h1 className="vsSchedule">Pancho</h1>
                <div className ="vsmonday">
                    
                    <div className="scheduleForm">
                    <form className={useStyles.container} noValidate>
      <TextField
        id="date"
        label="Date"
        type="date"
        name="date"
        format="yyyy-mm-dd"
        defaultValue="2019-01-01"
        value={this.state.date}
        onChange={this.handleDateChange}
        className={useStyles.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="standard-name"
        label="Address 1"
        className={useStyles.textField}
        name="address1"
        value={this.state.address1}
        onChange={this.handleChange}
        margin="normal"
      />
      <TextField
        id="standard-name"
        label="Address 2"
        name="address2"
        className={useStyles.textField}
        value={this.state.address2}
        onChange={this.handleChange}
        margin="normal"
      />
      <TextField
        id="standard-name"
        label="City"
        name="city"
        className={useStyles.textField}
        value={this.state.city}
        onChange={this.handleChange}
        margin="normal"
      />
      <TextField
        id="standard-name"
        label="State"
        name="state"
        className={useStyles.textField}
        value={this.state.state}
        onChange={this.handleChange}
        margin="normal"
      />
      <TextField
        id="standard-name"
        label="Zipcode"
        name="zipcode"
        className={useStyles.textField}
        value={this.state.zipcode}
        onChange={this.handleChange}
        margin="normal"
      />
    </form>
    <Button variant="contained" className={useStyles.button} onClick={this.handleSubmit}>
        Save
      </Button>
    
                    </div>
                </div> 
              
              </div>
            </div>
          </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    vendor: state.vendor,
    isLoggedIn: state.isLoggedIn
  } 
}


export default connect(mapStateToProps, {getSessionVendor: getSessionVendor, logout: logout})(VendorSchedule);
