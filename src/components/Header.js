import React, { Component } from "react";
import GeneralMenu from "./generalMenu/GeneralMenu";

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
      <div className='container-fluid header'>
        <div className='row'>
          <div className='col-xl-2 col-lg-4 col-md-4 col-sm-4 col-xs-2 header-logos'>
            <div className='header-logo-wrapper'>
              <a href='#'>
                <img src='/images/logo_official.png' alt='logo_official' />
              </a>
            </div>
          </div>
          <div className='offset-xl-6 offset-lg-4 offset-md-4 offset-sm-4'></div>
          <div className='col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4 header-menu'>
            <div className='header-wrapper d-flex justify-content-end'>
              <div className='header-profile-logo-wrapper'>
                <img src='/images/noun_profile_logo.png' alt='profile_logo' />
              </div>
              <div className='header-burger d-flex flex-column'>
                <button
                  className={
                    isActiveMenu
                      ? "header-menu-btn is-active"
                      : "header-menu-btn"
                  }
                  onClick={() => {
                    this.setState({ isActiveMenu: !this.state.isActiveMenu });
                  }}
                >
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
