import React from 'react';
import './landingPage.css';


class Hamburger extends React.Component {

    state = {
        extended:false
    }

    // var popup = document.getElementById('popup');
    // var popup_window = document.getElementById('popup_window');
    // popup_window.style.display = 'none';

    // popup.onclick = function() { 
    //     if(popup_window.style.display === 'none') {
    //         popup_window.style.display = 'block';
    //         var window_height = popup_window.offsetHeight + 35;
    //         popup_window.style.top = '-' + window_height + 'px';
    //     } else {
    //         popup_window.style.display = 'none';
    //     }
    // }

    clickBurger() {
        this.setState({
            extended: !this.state.extended
        });
    }



    render()
    {
        let extendedBar = ""
        if(this.state.extended){
            extendedBar=
                <div id="popup_window">
                    <nav className="nv">
                        <a className="r" href="#">Get Involved</a>
                        <a href="#">Impact</a>
                        <a href = "#"> About</a>
                        <a href ="#">Contact</a>
                        <a href="Submit Sevice">Submit Service</a>
                        <a href="Submit Items">Submit Items</a>
                    </nav>
                </div>
        }else{
            extendedBar=""
        }
        return(
            <div onClick={(e)=>this.clickBurger(e)} id="popup">
            <div onClick={(e)=>this.clickBurger(e)} className="container" >
            <div onClick={(e)=>this.clickBurger(e)} className="bar1"></div>
            <div onClick={(e)=>this.clickBurger(e)} className="bar2"></div>
            <div onClick={(e)=>this.clickBurger(e)} className="bar3"></div>
                {extendedBar}
            </div>
            </div>
        );
    }
}


export default Hamburger;