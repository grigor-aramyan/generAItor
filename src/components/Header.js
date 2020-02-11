import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="col-10 offset-1 col-lg-8 offset-lg-1 div-wrapper d-flex justify-content-center align-items-center">
          <div className="header-wrapper">
            <div className="header-logo-wrapper">
              <img src="images/logo_official.png" alt="logo_official" />
            </div>
            <div className="header-profile-logo-wrapper">
              <img src="images/noun_profile_logo.png" alt="profile_logo" />
            </div>
            <div className="heaader-burger">
              <img
                src="images/Rectangle.png"
                alt="rectangle"
                className="header-rectangle1"
              />
              <img
                src="images/Rectangle.png"
                alt="rectangle"
                className="header-rectangle2"
              />
              <img
                src="images/Rectangle.png"
                alt="rectangle"
                className="header-rectangle3"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
