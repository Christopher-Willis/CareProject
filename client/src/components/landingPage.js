import React from 'react';
import './landingPage.css';

class landingPage extends React.Component {
    render() {
        return (
            <div>
                    <header>
                        <div class="logo">
                        <img src="https://careportal.org/wp-content/uploads/2019/01/careportal-logo.png" alt=""/>
                        </div>
                    </header>
                    <main>
                        <h1>Search For Your Saving Grace</h1>
                        <div class="time">
                            <h3>Donate Your Time</h3>
                            <button class="b0"> Donate Time </button>
                        </div>
                        <div class="thing">
                            <h3>I Have a Item(s) to Donate</h3>
                            <button class="b1">Donate Item</button>
                        </div>
                        <div class="trade">
                            <h3>Im Skilled!</h3>
                            <button class="b0">Donate Your Skill's</button>
                        </div>
                    <div class="help">
                        <h3>I just want to help</h3>
                        <button class="b1">Donate Anything</button>
                    </div>
                </main>
            </div>
        );
        }
}

export default landingPage;
