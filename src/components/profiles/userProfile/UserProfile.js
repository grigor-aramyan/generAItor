import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../Header';
import UserProfileMain from './UserProfileMain';
import MainMenu from '../MainMenu';
import AboutProfiles from '../AboutProfiles';
import Footer from '../../Footer';
import PropTypes from 'prop-types';

// actions
import {
  getProfileData
} from '../../../actions/userActions';

class UserProfile extends Component {
  componentDidMount() {
    this.props.getProfileData(3);
  }

  render() {
    const { isAuthenticated, ideaGeneraitor } = this.props;

    let fullName = '';
    let ideaGeneratorDescription = '';
    if (ideaGeneraitor) {
      fullName = ideaGeneraitor.full_name;
      ideaGeneratorDescription = ideaGeneraitor.description;
    }

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
              {isAuthenticated && <MainMenu />}
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-10 offset-1 col-lg-8 offset-lg-2  d-flex justify-content-center align-items-center">
              <UserProfileMain
                fullName={fullName}
                recomendations={10}
                isLogged={isAuthenticated}
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-10 offset-1 col-lg-8 offset-lg-2  d-flex justify-content-center align-items-center">
              <AboutProfiles about={ideaGeneratorDescription}/>
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
  isAuthenticated: PropTypes.bool.isRequired,
  error: PropTypes.object.isRequired,
  user: PropTypes.object,
  ideaGeneraitor: PropTypes.object,
  getProfileData: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.user.isAuthenticated,
  error: state.error,
  user: state.user.user,
  ideaGeneraitor: state.user.ideaGeneraitor
});

export default connect(mapStateToProps, {
  getProfileData
})(UserProfile);