import React from 'react';
import { BrowserRouter as Switch, Route, Link } from 'react-router-dom';
import './App.css';
import SignUp from "./Components/SignUp/SignUp"



import UserLanding from './Components/UserLanding/UserLanding';

function App() {
  return (
    <div className="App">
     
     
      <Switch>
        <SignUp/>
        
      </Switch>
    </div>
  );
}

export default App;
