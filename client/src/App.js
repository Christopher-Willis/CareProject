import React from 'react';
import Form from './components/FormStepper/FormStepper';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Hamburger from './components/hamburger'
import landingPage from './components/landingPage'
import Stepper from './components/FormStepper/FormStepper'

// import Landing from './components/landingPage'

function App() {
  return (
    <Router>
      <div>
        <Hamburger/>
        <div className="App-header"> 
        <Route path="/" exact component={Stepper} />
        <Route path="/form" exact component={Form} />

        {/* <Route path="/login" exact component={LogIn} />
        <Route path="/schedule" component={Calendar} /> */}
      </div>
      </div>
    </Router>
  );
}

export default App;

