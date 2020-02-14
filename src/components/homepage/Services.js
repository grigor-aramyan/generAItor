import React, { Component } from 'react';

export default class Services extends Component {
  render() {
    return (
      <section className="container-fluid services">
        
          
        <div className="services-title-wrapper">
        <div className="services-title">WE WILL LET YOU</div>
        </div>
        <div className="services_content">
        <div className="d-flex justify-content-around inner_content">
          <div className="col-7 d-flex justify-content-end inner-image">
          <img src="images/services_image1.png" alt="services-image"/>
          <img src="images/services_bg.png" className="serv_bg1" alt="services-bg"/>
          </div>
          <div className="col-5 align-content-center inner-text">
          <p>
            Give creative and innovitive ideas and leave feedbacks to
            organizations.
          </p>
          <a href="#" className="services_button">Subscribe</a>
          </div>    
        </div>

        <div className="d-flex justify-content-around inner_content">
          <div className="col-5 align-content-center inner-text">
          <p>
            Get ideas and feedbacks about your services and products from your
            users.
          </p>
          <a href="#" className="services_button">Subscribe</a>
          </div> 
          <div className="col-7 d-flex justify-content-start inner-image">
          <img src="images/services_image2.png" alt="services-image"/>
          <img src="images/services_bg.png" className="serv_bg2" alt="services-bg"/>
          </div>   
        </div>
        </div>
{/*}
        <div className="services-rectangle-2"></div>
        <div className="services-image2-wrapper">
          <img src="images/services_image2.png" alt="service_image" />
        </div>
        <div className="services-text2-wrapper">
          <p>
            Get ideas and feedbacks about your cervices and products from your
            users.
          </p>
          <div className="services-button-2">
            <a href="#">SUBSCRIBE</a>
          </div>
        </div> */}
        
      </section>
    );
  }
}
