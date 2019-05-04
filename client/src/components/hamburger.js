import React from 'react';

export function hamburger(){
    var popup = document.getElementById('popup');
    var popup_window = document.getElementById('popup_window');
    popup_window.style.display = 'none';

    popup.onclick = function() { 
        if(popup_window.style.display === 'none') {
            popup_window.style.display = 'block';
            var window_height = popup_window.offsetHeight + 35;
            popup_window.style.top = '-' + window_height + 'px';
        } else {
            popup_window.style.display = 'none';
        }
    }

    function myFunction(x) {
        x.classList.toggle("change");
    }

    return(
        <div id="popup">
        <div class="container" onclick={this.myFunction(this)}>
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
            <div id="popup_window">
                <nav class="nv">
                    <a class="r" href="#">Get Involved</a>
                    <a href="#">Impact</a>
                    <a href = "#"> About</a>
                    <a href ="#">Contact</a>
                    <a href="Submit Sevice">Submit Service</a>
                    <a href="Submit Items">Submit Items</a>
                </nav>
            </div>
        </div>
        </div>
    );
}