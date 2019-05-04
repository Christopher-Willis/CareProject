import React from 'react';
import logo from './logo.svg';
import Form from './components/form';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Form} />
        {/* <Route path="/login" exact component={LogIn} />
        <Route path="/schedule" component={Calendar} /> */}
      </div>
      <footer style= {{position:"absolute",left:5,bottom:0,right:0}}> @2019 Rocket.build Hackathon</footer>
    </Router>
  );
}

export default App;
