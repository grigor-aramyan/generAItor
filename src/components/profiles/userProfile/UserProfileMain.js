import React, { Component } from 'react';
import UserProfileButtons from './UserProfileButtons';
import PropTypes from 'prop-types';

export default class UserProfileMain extends Component {
  constructor() {
    super();
    this.state = {
      showdotSitings: false
    };
  }

  showSittings = () => {
    this.setState({ showdotSitings: !this.state.showdotSitings });
  };
  render() {
    const { name, surname, recomendations, isLogged } = this.props;

    return (
      <div className="container">
        <div className="user-main-wrapper d-flex">
          <div className="imgRect-wrapper">
            <div className="user-image-recatngle"></div>
            <div className="user-image-wrapper">
              <img src="images/userProfileImage.png" alt="profile-image" />
            </div>
          </div>
          <div className="user-informText-wrapper">
            <div className="userName">
              <h1 className="user-name-surname">
                {name} {surname}
              </h1>
            </div>
            <div className="recomendations">
              {recomendations && (
                <p>
                  <span>{recomendations}</span> recomendations
                </p>
              )}
            </div>
            <UserProfileButtons
              isLogged={isLogged}
              showSittings={this.showSittings}
            ></UserProfileButtons>

            {this.state.showdotSitings && (
              <div className="user-dotSittings-wrapper">
                <div className="polygon"></div>
                <div className="dotSittings-rect">
                  <div>
                    <img src="images/userDotSitting1.png" alt="sitting" />
                    <a href="#" className="sitting-text">
                      Share Profile
                    </a>
                  </div>
                  <div>
                    <img src="images/userDotSitting2.png" alt="sitting" />
                    <a href="#" className="sitting-text">
                      Write Reccomendation
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

UserProfileMain.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  recomendations: PropTypes.number.isRequired,
  isLogged: PropTypes.bool.isRequired
};
