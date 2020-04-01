import React, { Component } from 'react';

const rotateStyle = {
  transform: 'rotate(90deg);'
};
const rotateStyle2 = {
  transform: 'rotate(180deg);'
};
class PassWord extends Component {
  constructor() {
    super();
    this.state = {
      isActive: false,
      password: '',
      newPassword: '',
      confirmNewPassword: ''
    };
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { isActive, password, newPassword, confirmNewPassword } = this.state;
    return (
      <div className="sittings-section password-wrapper">
        <div className="section-btn password-btn d-flex align-items-center justify-content-between">
          <p
            className="section-btn-text password-btn-text"
            onClick={() => this.setState({ isActive: !this.state.isActive })}
          >
            Password
          </p>

          <img
            src="images/sittings-vector.png"
            alt="Vector"
            className="section-vector-img sittings-vector-img"
            style={
              isActive
                ? { transform: 'rotate(360deg)' }
                : { transform: 'rotate(270deg)' }
            }
          />
        </div>
        {isActive && (
          <div className="section-sub-wrapper sub-password-wrapper">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={this.handleChange}
              className="sub-password-input"
            />
            <input
              type="password"
              placeholder="New Password"
              name="newPassword"
              value={newPassword}
              onChange={this.handleChange}
              className="sub-password-input"
            />
            <input
              type="password"
              name="confirmNewPassword"
              value={confirmNewPassword}
              onChange={this.handleChange}
              placeholder="Confirm New Password"
              className="sub-password-input"
            />
            <button className="pass-save-btn">Save</button>
          </div>
        )}
      </div>
    );
  }
}

export default PassWord;
