import React from 'react';
import { Link } from "react-router-dom";
import logo from './logo.png';
import './carePort.css';

class TimeCommit extends React.Component {
    render() {
        return (
            <div>
                <div className="thing">
                    <h3> Schedule a Reoccurring Time</h3>
                    <img className="don" src="https://images.unsplash.com/photo-1435527173128-983b87201f4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1647&q=80" alt=""/>
                    <Link to="/form"><button className="b1">Schedule your Time</button></Link>
                </div>
                <div className="time">
                    <h3> Schedule for Today Only! </h3>
                    <img className="don" src="https://images.unsplash.com/photo-1523821393989-a61a1f006c8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" alt=""/>                    
                    <Link to="/form"><button className="b0"> Schedule for Today Only</button></Link>
                </div>
            </div>
        );
    }
}

export default TimeCommit;
