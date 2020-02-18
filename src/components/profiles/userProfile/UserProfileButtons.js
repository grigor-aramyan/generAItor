import React, { Component } from 'react';

export default class UserProfileButtons extends Component {
  render() {
    return (
      <div>
        {this.props.isLogged && (
          <div className="btns-wrapper d-flex">
            <div className="send-message-btn">
              <a href="#">Send Message</a>
            </div>
            <button className="dots-wrapper" onClick={this.props.showSittings}>
              ...
            </button>
          </div>
        )}
      </div>
    );
  }
}
