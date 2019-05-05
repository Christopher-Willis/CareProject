import React from 'react';
import { Link } from "react-router-dom";
import logo from './logo.png';
import './carePort.css';
import Hamburger from './hamburger';

class landingPage extends React.Component {
    render() {
        return (
            <div>
                <header>
                <img className="mLogo" src={logo} alt="Grace Place logo"/>
                    <Hamburger/>
                </header>
                <div className="logo">
                        <img src="https://careportal.org/wp-content/uploads/2019/01/careportal-logo.png" alt="Care Portal Logo"/>
                    </div>
                <div className="wraper">
                    <div className="vc_single_image-wrapper rolo   vc_box_border_grey">
                        <img width="400" height="350" src="https://careportal.org/wp-content/uploads/2019/02/Little-Things-Families-Together-2.gif" className="vc_single_image-img attachment-full" alt="Little things that help keep families together"/>
                    </div>
                </div>

                <main>
                    <div className="time">
                        <h3>Donate Your Time</h3>
                        <img className="don" src="https://images.unsplash.com/photo-1439920120577-eb3a83c16dd7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80" alt=""/>
                        <p>Register to be helping hands!</p>
                        
                        <button className="b0"> Donate Time </button>
                    </div>
                    <div className="thing">
                        <h3> Donate Items and Things</h3>
                        <img className="don" src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt=""/>
                        <p>Do you have old or unwanted items?</p>
                        <button className="b1">Donate</button>
                    </div>
                    <div className="trade">
                        <h3>Im Skilled!</h3>
                        <img className="don" src="https://images.unsplash.com/photo-1500837744038-ec60054ed01e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" alt=""/>
                        <p>Are you a Skilled tradesman? </p>
                        <button className="b0">Donate Your Skill's</button>
                    </div>
                    <div className="help">
                        <h3>I just want to help</h3>
                        <img className="don" src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt=""/>
                        <p>Not sure how to help? </p>
                        <button className="b1">Donate </button>
                    </div>
                </main>
            </div>
        );
        }
}

export default landingPage;
