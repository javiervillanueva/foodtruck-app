import React from "react";
import { makeStyles } from '@material-ui/core/styles';
// import axios from "axios";
import "./UserSendMessage.css";
import { getSessionVendor} from '../../redux/actions';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import UserDrawer from '../UserLanding/UserDrawer';



const useStyles = makeStyles(theme => (
    {
    container: {
      height: '500px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
    textField: 
    {
      display: 'flex',
      justifyContent: 'space-around',
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }));




class UserSendMessage extends React.Component {

    state = {
        to: "",
        from: "",
        body: ""
        
    };

    handleChange = event => this.setState({
        [event.target.name]: event.target.value
    })

    // handleSubmit = async () => {
    //     try {
    //       if (this.state.to && this.state.from && this.state.body) {
    //        await axios.post("/api/add-menu-item", this.state);
    //         alert("added menu item");
    //         this.setState ({
    //           to: "",
    //           from: "",
    //           body: ""
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
//         if (response.data.email);
//       });
//   }

render() {
      return (
      <div className="MessageWrapper">
          <UserDrawer/>
          <div className="MessageBody">
              <div className="MessageContainer">
                <div className="MessageDisplay"></div>
                    
                    <div className="MessageForm">
                    <form style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', width: '200px'}} noValidate>
      <TextField
        id="standard-name"
        label="From"
        // className={useStyles.textField}
        style={{width: '200px'}}
        name="from"
        value={this.state.from}
        onChange={this.handleChange}
        margin="normal"
      />
      <TextField
        id="standard-name"
        label="To"
        // className={useStyles.textField}
        style={{width: '200px'}}
        name="to"
        value={this.state.to}
        onChange={this.handleChange}
        margin="normal"
      />
      <TextField
        id="standard-name"
        label="Message Body"
        name="body"
        multiline
        rowsMax="10"
        // className={useStyles.textField}
        style={{width: '200px'}}
        value={this.state.body}
        onChange={this.handleChange}
        margin="normal"
      />
    </form>
    <br/>
    <Button variant="contained" className={useStyles.button} onClick={this.handleSubmit}>
        Send
      </Button>
    
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


export default connect(mapStateToProps, {getSessionVendor: getSessionVendor})(UserSendMessage);
