import React, { Component } from 'react';

export default class OrgProfileButtons extends Component {
  render() {
    return (
      <div>
        {this.props.isLogged && (
        <div className="btns-wrapper d-flex">
          <div className="send-message-btn">
            <a href="#">Follow</a>
          </div>
            <button className="dots-wrapper">
              ...
            </button>
          </div>
        )}
        </div>
    );
  }
}