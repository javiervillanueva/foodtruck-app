import React from 'react';
import { BrowserRouter as Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Vlogin from './Components/Vendor login/Vendorlogin';
import SignUp from "./Components/SignUp/SignUp"
import UserLogin from "./Components/User login/userlogin"



import UserLanding from './Components/UserLanding/UserLanding';

function App() {
  return (
    <div className="App">

      <Switch>
        <UserLogin/>
        <Vlogin/>
        <UserLanding />
      </Switch>
    </div>
  );
}

export default App;
