import React from 'react';
import './landingPage.css';

class landingPage extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <div className="logo">
                    <img src="https://careportal.org/wp-content/uploads/2019/01/careportal-logo.png" alt="Care Portal Logo"/>
                    </div>
                </header>
                <main>
                    <h1>Search For Your Saving Grace</h1>
                    <div className="time">
                        <h3>Donate Your Time</h3>
                        <button className="b0"> Donate Time </button>
                    </div>
                    <div className="thing">
                        <h3>I Have an Item(s) to Donate</h3>
                        <button className="b1">Donate Item</button>
                    </div>
                    <div className="trade">
                        <h3>Im Skilled!</h3>
                        <button className="b0">Donate Your Skills</button>
                    </div>
                    <div className="help">
                        <h3>I just want to help</h3>
                        <button className="b1">Get Started</button>
                    </div>
                </main>
            </div>
        );
        }
}

export default landingPage;
