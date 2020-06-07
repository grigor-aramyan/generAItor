import React, { Component } from "react";

export default class Services extends Component {
  render() {
    return (
      <section className='container-fluid services'>
        <div className='services-title-wrapper d-flex justify-content-center'>
          <div className='services-title'> WE WILL LET YOU </div>
        </div>
        <div className='services_content'>
          <div className='inner_content'>
            <p className='service-texts-toggle '>
              Give creative and innovitive ideas and leave feedbacks to
              organizations.
            </p>
            <div className='col-7 inner-image'>
              <img
                src='images/services_image1.png'
                alt='services-image'
                className='home-services-img'
              />
              <img
                src='images/services_bg.png'
                className='serv_bg1'
                alt='services-bg'
              />
            </div>
            <div className='col-5 inner-text'>
              <p className='service-texts'>
                Give creative and innovitive ideas and leave feedbacks to
                organizations.
              </p>
              <a href='#' className='services_button services_button_first'>
                Subscribe
              </a>
            </div>
          </div>

          <div className='inner_content'>
            <div className='col-5 inner-text'>
              <p className='service-texts service-texts-toggle'>
                Get ideas and feedbacks about your services and products from
                your users.
              </p>
              <a href='#' className='services_button'>
                Subscribe
              </a>
            </div>
            <div className='col-7 inner-image'>
              <img
                src='images/services_image2.png'
                alt='services-image'
                className='home-services-img'
              />
              <img
                src='images/services_bg.png'
                className='serv_bg2'
                alt='services-bg'
              />
            </div>
            <a href='#' className='services_button services_button_toggle'>
              Subscribe
            </a>
          </div>
        </div>
      </section>
    );
  }
}
