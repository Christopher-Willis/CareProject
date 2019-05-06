import React from 'react';
import FormStepper from './containers/FormStepperContainer';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import './components/carePort.css';
import logo from './components/logo.png';
import Hamburger from './components/hamburger';
import landingPage from './components/landingPage'
import TimeCommitments from './components/TimeCommitments'


// import Landing from './components/landingPage'

function App() {
  return (
    <Router onUpdate={() => window.scrollTo(0, 0)} >
      <header>
        <img className="mLogo" src={logo} alt="Grace Place logo"/>
            <Hamburger/>
      </header>
      <div>
        {/* <Hamburger/> */}
        <div className="App-header"> 
        <Route path="/" exact component={landingPage} />
        <Route path="/time" exact component={TimeCommitments}/>
        <Route path="/form" exact component={FormStepper} />

        {/* <Route path="/login" exact component={LogIn} />
        <Route path="/schedule" component={Calendar} /> */}
      </div>
      </div>
    </Router>
  );
}

export default App;

