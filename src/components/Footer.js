import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className='footer-wrapper'>
        <div className='conatiner-fluid'>
          <div className='footer-line'></div>
          <div className='col-12 footer-links-wrapper'>
            <a href='#' className='col-2 footer-link'>
              Contact Us
            </a>
            <a href='#' className='col-2 footer-link'>
              Feedbacks
            </a>

            <a href='#' className='col-2 footer-link'>
              FAQ
            </a>

            <a href='#' className='col-2 footer-link'>
              Partners
            </a>
            <a href='#' className='col-2 footer-link'>
              News
            </a>
            <a href='#' className='col-2 footer-link'>
              Help
            </a>
          </div>

          <div className='col-12'>
            <div className='row'>
              <div className='col-12 mt-3 mb-3 d-flex justify-content-center'>
                <img
                  className='footer-icon '
                  src='/images/fb-logo.png'
                  alt='fb-logo'
                />

                <img
                  className='footer-icon'
                  src='/images/in-logo.png'
                  alt='in-logo'
                />
              </div>
            </div>

            <div className='row'>
              <div className='footer-contacts'>
                <h2 className='footer-address'>Address</h2>
                <h2 className='footer-phone'>Phone Number</h2>
              </div>
            </div>
          </div>
          <div className='col-12 mt-2'>
            <div className='footer-line2'></div>
            <div className='footer-privacy'>
              <p>Privacy and Cookie Policy</p>
            </div>

            <div className='footer-innovities'>
              <p className='footer-copyright'>
                <span className='copyright'>©</span> Innovities{" "}
                <span className='footer-span'>2020</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
