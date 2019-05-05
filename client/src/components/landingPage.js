import React from 'react';
import { Link } from "react-router-dom";
import logo from './logo.png'
import './landingPage.css';

class landingPage extends React.Component {
    render() {
        return (
            <div>
                <header>
                <img className="mLogo" src={logo} alt="Grace Place logo"/>
                    <div className="logo">
                        <img src="https://careportal.org/wp-content/uploads/2019/01/careportal-logo.png" alt="Care Portal Logo"/>
                    </div>
                </header>
                <main>
                    <h1>Search For Your Saving Grace!</h1>
                    <div className="time">
                        <h3>Donate Your Time</h3>
                        <Link className="center" to= "/form"><button className="b0">Donate Time </button></Link>
                    </div>
                    <div className="thing">
                        <h3>I Have an Item(s) to Donate!</h3>
                        <Link className="center" to="/form"><button className="b1">Donate Item</button></Link>
                    </div>
                    <div className="trade">
                        <h3>I'm Skilled!</h3>
                        <Link className="center" to="/form"><button className="b0">Donate Your Skills</button></Link>
                    </div>
                    <div className="help">
                        <h3>I just want to help!</h3>
                        <Link className="center" to="/form" ><button className="b1">Get Started</button></Link>
                    </div>
                </main>
            </div>
        );
        }
}

export default landingPage;
