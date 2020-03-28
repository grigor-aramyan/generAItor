import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// actions
import {
  getProfileData
} from '../../../actions/userActions';

// components
import Header from '../../Header';
import OrgProfileMain from './OrgProfileMain';
import AboutProfiles from '../AboutProfiles';
import OrgProfileActions from './OrgProfileActions';
import Footer from '../../Footer';

class OrgProfile extends Component {
  componentDidMount() {
    this.props.getProfileData(2);
  }

  constructor() {
    super();
    this.state = {
      followers: 10,
      feedbacks: 5
    };
  }
  render() {
    const { followers, feedbacks } = this.state;
    const {
      isAuthenticated,
      organization
    } = this.props;

    let organizationName = '';
    let organizationDescription = '';
    if (organization) {
      organizationName = organization.name;
      organizationDescription = organization.description;
    }

    return (
      <div>
        <Header />
        <OrgProfileMain
          organization={organizationName}
          followers={followers}
          feedbacks={feedbacks}
          isLogged={isAuthenticated}
        />
        <AboutProfiles about={organizationDescription}/>
        <OrgProfileActions isLogged={isAuthenticated} />
        <Footer />
      </div>
    );
  }
}

OrgProfile.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  error: PropTypes.object.isRequired,
  getProfileData: PropTypes.func.isRequired,
  user: PropTypes.object,
  organization: PropTypes.object
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.user.isAuthenticated,
  error: state.error,
  user: state.user.user,
  organization: state.user.organization
});

export default connect(mapStateToProps, {
  getProfileData
})(OrgProfile);