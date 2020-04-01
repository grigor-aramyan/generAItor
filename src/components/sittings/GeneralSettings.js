import React, { Component } from 'react';

class GenerealSittings extends Component {
  constructor() {
    super();
    this.state = {
      isActive: false,
      userInfo: ''
    };
  }
  render() {
    const { isActive, userInfo } = this.state;
    return (
      <div className="sittings-section ">
        <div className="section-btn  d-flex align-items-center justify-content-between">
          <p
            className="section-btn-text "
            onClick={() => this.setState({ isActive: !this.state.isActive })}
          >
            General Sittings
          </p>

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
          <div className="section-sub-wrapper text-center">
            <textarea
              placeholder="Write about yourself..."
              className="general-sittings-textarea"
              value={userInfo}
              name="userInfo"
              onChange={e => this.setState({ [e.target.name]: e.target.value })}
            ></textarea>
            <button className="pass-save-btn">Save</button>
          </div>
        )}
      </div>
    );
  }
}

export default GenerealSittings;
