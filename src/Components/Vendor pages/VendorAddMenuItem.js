import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import axios from "axios";
import "./VendorAddMenuItem.css";
import { getSessionVendor} from '../../redux/actions';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



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




class VendorAddMenuItem extends React.Component {

    state = {
        title: "",
        description: "",
        price: ""
    };

    handleChange = event => this.setState({
        [event.target.name]: event.target.value
    })

    handleSubmit = async () => {
        try {
          if (this.state.title && this.state.description && this.state.price) {
           await axios.post("/api/add-menu-item", this.state);
            alert("added menu item");
            this.setState ({
              title: "",
              description: "",
              price: ""
            })
          } else {
            alert('No blank fields allowed');
          }
        } catch (error) {
            console.log(error)
        }
    }

  componentDidMount() {
    axios.get('/api/logged-in-vendor')
      .then(response => {
        this.props.getSessionVendor(response.data);
        if (response.data.email);
      });
  }

render() {
      return (
      <div className="MenuAdd">
          <div className="MenuBody">
              <div className="MenuContainer">
                <div className="MenuDisplay"></div>
                    
                    <div className="MenuForm">
                    <form style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', width: '200px'}} noValidate>
      <TextField
        id="standard-name"
        label="Title"
        // className={useStyles.textField}
        style={{width: '200px'}}
        name="title"
        value={this.state.title}
        onChange={this.handleChange}
        margin="normal"
      />
      <TextField
        id="standard-name"
        label="Description"
        name="description"
        multiline
        rowsMax="4"
        // className={useStyles.textField}
        style={{width: '200px'}}
        value={this.state.description}
        onChange={this.handleChange}
        margin="normal"
      />
      <TextField
        id="standard-name"
        label="Price"
        name="price"
        // className={useStyles.textField}
        style={{width: '200px'}}
        value={this.state.price}
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
    );
  }
}

const mapStateToProps = (state) => {
  return {
    vendor: state.vendor,
    isLoggedIn: state.isLoggedIn
  } 
}


export default connect(mapStateToProps, {getSessionVendor: getSessionVendor})(VendorAddMenuItem);
