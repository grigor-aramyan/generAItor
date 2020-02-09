import React from 'react';

const Intouch = () => {
    return(
       <div>
           <section className="container-fluid in_touch">
            <div>
                <img className="in_touch-img" src="images/intouch-bg.jpg" alt="Get in touch"/>
                <hr/>
            </div>
            <div className="get_in_touch-title">
            NEED TO GET IN TOUCH?
            </div>
            <div className="in_touch_box">
                <div className="in_touch_div">
                <img src="images/intouch_div.png" alt=""/>
                </div>
                <div className="get_in_touch-text">
                    <p>No metter your question, we’re here to help. </p>
                    <p>Give us a call or send an email.</p>
                    <br/>
                    <button className="get_in_touch-button"><a href="#">contact us</a></button>
                </div>

            </div>
           </section>
       </div> 
    )
}

export default Intouch;