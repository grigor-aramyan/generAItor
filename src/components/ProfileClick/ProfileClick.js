import React, { Component } from 'react';

export default class ProfileClick extends Component {
  constructor() {
    super();
    this.state = {
      isActive: true
    }
  }
  isActiveHandle = () => {
    this.setState({isActive: !this.state.isActive})
  }

  onButtonClick = () => {};
  render() {
    const {isActive} = this.state;
    return (
        <div className="container-fluid profileClick">
        <div className="row">
          {/* <div className="col-md-2 profileClick_logo"> */}
          <div className="col-xl-2 col-lg-4 col-md-4 col-sm-4 col-xs-2 header-logos">
          <div className="header-logo-wrapper">
            <a href="#">
              <img src="images/logo_white.png" alt="logo_official" />
            </a>
          </div>
          </div>
          <div className="offset-xl-6 offset-lg-4 offset-md-4 offset-sm-4"></div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4 header-menu">
            <div className="header-wrapper d-flex justify-content-end">
            <div className="header-profile-logo-wrapper">
                <img src="/images/noun_profile_logo.png" alt="profile_logo" />
              </div>
              <div className="header-burger d-flex flex-column">
                <button className= {isActive ? "menu-btn is-active" : "menu-btn"} 
            onClick={this.isActiveHandle}>
              <span></span>
            </button>
          </div>
        </div>
        </div>
        </div>

        <div className="row justify-content-center profileButtons-wrapper">
          <div className="col-xl-3 col-lg-4 col-md-5 col-sm-6 d-flex justify-content-around align-items-center profileClickButtons">
            <button onClick={this.props.openSignup} className="profileButton">
              SIGN UP
            </button>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-5 col-sm-6 d-flex justify-content-around align-items-center profileClickButtons">
            <button onClick={this.props.openSignIn} className="profileButton">
              SIGN IN
            </button>
          </div>
        </div>
      </div>
    );
  }
}
