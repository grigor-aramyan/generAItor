import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FollowerCard extends Component {
  render() {
    const { imgSrc, name, surname } = this.props;
    return (
      <div className="follower-card">
        <img src={imgSrc} alt="img" className="follower-image" />
        <p className="follower-name mt-3">
          {name} {surname}
        </p>
      </div>
    );
  }
}

FollowerCard.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired
};

export default FollowerCard;
