import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer-wrapper">
        <div className="conatiner-fluid">
          <div className="footer-line"></div>
          <div className="row">
            <div className="col-lg-2 col-md-2 col-sm-1 col-3 text-center">
              <div className="footer-link-wrapper">
                <a href="#" className="footer-link">
                  Contact Us
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-1 col-3 text-center ">
              <div className="footer-link-wrapper">
                <a href="#" className="footer-link">
                  Feedbacks
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-1 col-3 text-center">
              <div className="footer-link-wrapper">
                <a href="#" className="footer-link">
                  FAQ
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-1 col-3 text-center">
              <div className="footer-link-wrapper">
                <a href="#" className="footer-link">
                  Partners
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-1 col-3 text-center">
              <div className="footer-link-wrapper">
                <a href="#" className="footer-link">
                  News
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-1 col-3 text-center">
              <div className="footer-link-wrapper">
                <a href="#" className="footer-link">
                  Help
                </a>
              </div>
            </div>
          </div>
          <div className="flex-container text-center">
            <div className="footer-social-icons-wrapper">
              <div className="footer-icon1">
                <img src="images/fb-logo.png" alt="fb-logo" />
              </div>
              <div className="footer-icon2">
                <img src="images/in-logo.png" alt="in-logo" />
              </div>
            </div>
            <div className="footer-address">
              <h2>Address</h2>
            </div>
            <div className="footer-phone">
              <h2>Phone Number</h2>
            </div>
            <div className="footer-line2"></div>
            <div className="footer-privacy">
              <p>Privacy and Cookie Policy</p>
            </div>
            <div className="footer-innovities">
              <p>
                © Innovities <span className="footer-span">2020</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
