import React from 'react';
import PropTypes from 'prop-types';
class OrgCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleHover: false
    };
  }
  render() {
    return (
      <div
        className="org-card"
        onMouseEnter={() => this.setState({ toggleHover: true })}
        onMouseLeave={() => this.setState({ toggleHover: false })}
      >
        <img src={this.props.imgSrc} alt="image" />

        <h3 className="text-center mt-2">{this.props.name}</h3>
        {this.state.toggleHover && (
          <div>
            <button className="hover-btn">FOLLOW</button>
          </div>
        )}
      </div>
    );
  }
}

OrgCard.propTypes = {
  name: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired
};

export default OrgCard;
