import React, { Component } from 'react';
import { BrowserRouter as Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateUser } from './redux/actions';
import './App.css';
import Vlogin from './Components/Vendor login/Vendorlogin';
import SignUp from "./Components/SignUp/SignUp"
import UserLanding from './Components/UserLanding/UserLanding';


class App extends Component {

  componentDidMount() {
    const user = {
      name: 'sam',
      height: '5ft'
    }
    this.props.updateUser(user);
  }

  render () {

    console.log(this.props);


    return (
      <div className="App">
      
       
       
        <Switch>
          <Route exact path='/' component={UserLanding}/>
          <Route path='/vendor/login' component={Vlogin}/>
          <Route path='/vendor/signup' component={SignUp} />
        </Switch>
      </div>
    );

  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, {updateUser: updateUser})(withRouter(App));
