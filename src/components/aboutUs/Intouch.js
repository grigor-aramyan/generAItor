import React from 'react';

const Intouch = () => {
    return(
       <div>
           <section className="container-fluid in_touch">
            <div className="row">
              <div className="in_touch_img">
                <img className="in_touch-img" src="images/intouch-bg.jpg" alt="Get in touch"/>
                <img src="images/about_line.svg" className="about_line" alt="Intouch line"/>
                 <div className="m-auto get_in_touch-title">
                  NEED TO GET IN TOUCH?
                 </div>
              </div>
             <div className="d-flex in_touch-content">
              <div className="col-md-6 in_touch_div">
                <img src="images/intouch_div.png" alt="Stay in touch"/>
              </div>
              
              <div className="col-md-6 get_in_touch-text">
                <p>No metter your question, we’re here to help. </p>
                <p>Give us a call or send an email.</p>
                <button className="get_in_touch-button"><a href="#">contact us</a></button>
              </div>
             </div>
            </div>
           </section>
       </div> 
    )
}

export default Intouch;