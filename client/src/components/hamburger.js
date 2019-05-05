import React from 'react';
import { Link } from "react-router-dom";
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
                        <Link className="r" to="/">Grace Place Home</Link>
                        <Link to="/">My Impact</Link>
                        <Link to = "/">My Churches</Link>
                        <a href ="https://careportal.org/" target="_blank">CarePortal</a>
                        <Link href ="/">About</Link>
                    </nav>
                </div>
        }else{
            extendedBar=""
        }

        let xOrBurger = ""
        if(this.state.extended){
            xOrBurger=            
                <div onClick={(e)=>this.clickBurger(e)} className="change container" >
                    <div onClick={(e)=>this.clickBurger(e)} className="bar1"></div>
                    <div onClick={(e)=>this.clickBurger(e)} className="bar2"></div>
                    <div onClick={(e)=>this.clickBurger(e)} className="bar3"></div>
                        {extendedBar}
                </div>
        }else{
            xOrBurger=            
                <div onClick={(e)=>this.clickBurger(e)} className="container" >
                    <div onClick={(e)=>this.clickBurger(e)} className="bar1"></div>
                    <div onClick={(e)=>this.clickBurger(e)} className="bar2"></div>
                    <div onClick={(e)=>this.clickBurger(e)} className="bar3"></div>
                        {extendedBar}
                </div>
        }

        return(
            <div onClick={(e)=>this.clickBurger(e)} id="popup">
            {xOrBurger}
            </div>
        );
    }
}


export default Hamburger;