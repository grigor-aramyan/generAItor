import React, { Component } from 'react';
import GeneralMenu from './generalMenu/GeneralMenu';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      isActiveMenu: false,
    };
  }
  render() {
    const { isActiveMenu } = this.state;
    return (
      <div className="container-fluid header">
        <div className="row">
          <div className="col-md-2">
            <div className="header-logo-wrapper">
              <a href="#">
                <img src="/images/logo_official.png" alt="logo_official" />
              </a>
            </div>
          </div>
          <div className="offset-md-6"></div>
          <div className="col-md-3">
            <div className="header-wrapper d-flex justify-content-end">
              <div className="header-profile-logo-wrapper">
                <img src="/images/noun_profile_logo.png" alt="profile_logo" />
              </div>
              <div className="header-burger d-flex flex-column">
                <button className= {isActiveMenu ? "header-menu-btn is-active" : "header-menu-btn"} 
                  onClick={() => {
                    this.setState({ isActiveMenu: !this.state.isActiveMenu });
                  }}>
                <span></span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {this.state.isActiveMenu && <GeneralMenu isOpen={true} />}
      </div>
    );
  }
}

export default Header;
