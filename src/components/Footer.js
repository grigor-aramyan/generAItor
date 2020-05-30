import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      // <div className="footer-wrapper">
        <div className="container-fluid">
          <div className="footer-line"></div>
          <div className="row">
              <div className="col-md-12 col-sm-5 footer-links-wrapper">
                <ul>
                  <li>
                <a href="#" className="footer-link">
                  Contact Us
                </a>
                </li>
                <li>
                <a href="#" className="footer-link">
                  Feedbacks
                </a>
                </li>
                <li>
                <a href="#" className="footer-link">
                  FAQ
                </a>
                </li>
                <li>
                <a href="#" className="footer-link">
                  Partners
                </a>
                </li>
                <li>
                <a href="#" className="footer-link">
                  News
                </a>
                </li>
                <li>
                <a href="#" className="footer-link">
                  Help
                </a>
                </li>
              </ul>
              </div>

          <div className="col-md-12 col-sm-5 flex-container">
            <div className="footer-social-icons-wrapper">
              <div className="footer-icon">
                <img src="/images/fb-logo.png" alt="fb-logo" />
              </div>
              <div className="footer-icon">
                <img src="/images/in-logo.png" alt="in-logo" />
              </div>
            </div>
            <div className="footer-contacts">
            <div className="footer-address">
              <h2>Address</h2>
            </div>
            <div className="footer-phone">
              <h2>Phone Number</h2>
            </div>
            </div>
            </div>
            <div className="col-md-12 col-sm-12">
            <div className="footer-line2"></div>
            <div className="footer-privacy">
              <p>Privacy and Cookie Policy</p>
            </div>
            <div className="footer-innovities">
              <p className="footer-copyright">
                <span className="copyright">©</span> Innovities <span className="footer-span">2020</span>
              </p>
            </div>
            </div>
          </div>
        </div>
      // </div>
    );
  }
}
