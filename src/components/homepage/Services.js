import React, { Component } from 'react';

export default class Services extends Component {
  render() {
    return (
      <div className="container">
        <div className="services-title-wrapper">
          <h2>WE WILL LET YOU</h2>
        </div>
        <div className="services-title-line"></div>
        <div className="services-rectangle-1"></div>
        <div className="services-image1-wrapper">
          <img src="images/service_image.png" alt="service-image" />
        </div>
        <div className="services-text1-wrapper">
          <p>
            Give creative and innovitive ideas and leave feedbacks to
            organizations.
          </p>
          <div className="services-button-1">
            <p>SUBSCRIBE</p>
          </div>
        </div>

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
        </div>
      </div>
    );
  }
}
