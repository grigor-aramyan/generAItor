import React, { Component } from 'react';
import GeneralMenu from '../generalMenu/GeneralMenu';

class NavPage extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
      result: [],
      selectedLink: 'about',
      language: 'eng',
    };
  }

  handleInputChange = (e) => {
    this.setState({ query: e.target.value });
  };
  selectLanguage = (e) => {
    this.setState({ language: e.target.innerHTML });
  };
  showMenu = (e) => {
    console.log();
  };

  render() {
    const { selectedLink, language } = this.state;
    console.log(this.state.selectedLink);
    console.log(this.state.language);

    return (
      <div className="container-fluid profileClick">
        <div className="row">
          <div className="col-md-2 profileClick_logo">
            <a href="#">
              <img src="images/logo_white.png" alt="logo_official" />
            </a>
          </div>
          <div className="offset-8 heaader-burger d-flex flex-column">
            <a href="#" className="menu-btn" onClick={this.showMenu}>
              <span></span>
            </a>
          </div>
        </div>
        <div className="row justify-content-center signIn-wrapper">
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
            <div className="searchForm">
              <form>
                <label>
                  <i></i>
                  <input
                    className="search-field"
                    value={this.state.query}
                    onChange={this.handleInputChange}
                  />
                </label>
              </form>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="navLinks-wrapper">
            <ul className="navLinks-list">
              <li>
                <a
                  href="#"
                  className={
                    selectedLink === 'about' ? 'nav-link selected' : 'nav-link'
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    return this.setState({ selectedLink: 'about' });
                  }}
                >
                  {' '}
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={
                    selectedLink === 'pricing'
                      ? 'nav-link selected'
                      : 'nav-link'
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    return this.setState({ selectedLink: 'pricing' });
                  }}
                >
                  {' '}
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={
                    selectedLink === 'generators'
                      ? 'nav-link selected'
                      : 'nav-link'
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    return this.setState({ selectedLink: 'generators' });
                  }}
                >
                  {' '}
                  Idea Generators
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={
                    selectedLink === 'organizations'
                      ? 'nav-link selected'
                      : 'nav-link'
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    return this.setState({ selectedLink: 'organizations' });
                  }}
                >
                  {' '}
                  Organizations
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="language-wrapper">
            <ul className="language-list">
              <li>
                <a
                  href="#"
                  className={
                    language === 'arm'
                      ? 'language-link selected'
                      : 'language-link'
                  }
                  onClick={this.selectLanguage}
                >
                  arm
                </a>
              </li>
              <li className="v-line">
                <hr />
              </li>
              <li>
                <a
                  href="#"
                  className={
                    language === 'eng'
                      ? 'language-link selected'
                      : 'language-link'
                  }
                  onClick={this.selectLanguage}
                >
                  eng
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default NavPage;
