import React, { Component } from 'react';

class Delete extends Component {
  constructor() {
    super();
    this.state = {
      isActive: false,
      password: ''
    };
  }
  render() {
    const { isActive, password } = this.state;
    return (
      <div className="sittings-section ">
        <div
          className="section-btn  d-flex align-items-center justify-content-between"
          onClick={() => this.setState({ isActive: !this.state.isActive })}
        >
          <p className="section-btn-text ">Delete My Profile</p>

          <img
            src="images/sittings-vector.png"
            alt="Vector"
            className="section-vector-img"
            style={
              isActive
                ? { transform: 'rotate(360deg)' }
                : { transform: 'rotate(270deg)' }
            }
          />
        </div>
        {isActive && (
          <div className="section-sub-wrapper d-flex flex-wrap align-items-center justify-content-center">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={event =>
                this.setState({ [event.target.name]: event.target.value })
              }
              className="sub-password-input mt-5"
            />
            <button className="pass-save-btn mt-5">Delete</button>
          </div>
        )}
      </div>
    );
  }
}

export default Delete;
