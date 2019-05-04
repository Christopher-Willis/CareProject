import React from 'react';
// import Form from './components/FormStepper/FormStepper';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Hamburger from './components/hamburger'
import Landing from './components/landingPage'

function App() {
  return (
    <Router>
      <div>
        <Hamburger/>
        <Route path="/" exact component={Landing} />
        {/* <Route path="/login" exact component={LogIn} />
        <Route path="/schedule" component={Calendar} /> */}
      </div>
    </Router>
  );
}

export default App;

