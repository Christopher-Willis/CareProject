import React from 'react';
import Form from './components/TradeForm';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Form} />
        {/* <Route path="/form" exact component={Form} /> */}
        {/* <Route path="/schedule" component={Calendar} /> */}
      </div>
    </Router>
  );
}

export default App;
