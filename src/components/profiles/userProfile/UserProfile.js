import React, { Component } from 'react';
import Header from '../../Header';
import UserProfileMain from './UserProfileMain';
import MainMenu from '../MainMenu';
import AboutProfiles from '../AboutProfiles';
import Footer from '../../Footer';
import PropTypes from 'prop-types';

export default class UserProfile extends Component {
  constructor() {
    super();
    this.state = {
      isLogged: true
    };
  }
  render() {
    const { isLogged } = this.state;
    const { name, surname, recomendations } = this.props;
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <Header />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-8 offset-2 col-lg-8 offset-lg-2 d-flex justify-content-center align-items-center">
              {isLogged && <MainMenu />}
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-10 offset-1 col-lg-8 offset-lg-2  d-flex justify-content-center align-items-center">
              <UserProfileMain
                name={name}
                surname={surname}
                recomendations={recomendations}
                isLogged={isLogged}
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-10 offset-1 col-lg-8 offset-lg-2  d-flex justify-content-center align-items-center">
              <AboutProfiles />
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <Footer />
        </div>
      </div>
    );
  }
}

UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  recomendations: PropTypes.number.isRequired
};
