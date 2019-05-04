import React from 'react';
import logo from './logo.svg';
import Form from './components/form';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Landing from './components/landingPage'

function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Landing} />
        {/* <Route path="/login" exact component={LogIn} />
        <Route path="/schedule" component={Calendar} /> */}
      </div>
    </Router>
  );
}

export default App;
