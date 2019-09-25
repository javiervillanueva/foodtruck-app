import React from 'react';
import { BrowserRouter as Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Vlogin from './Components/Vendorlogin';
import UserLanding from './Components/UserLanding/UserLanding';

function App() {
  return (
    <div className="App">
    
      <Switch>
        <Vlogin/>
        <UserLanding />
      </Switch>
    </div>
  );
}

export default App;
