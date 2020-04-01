import React, { Component } from 'react';

class Subscription extends Component {
  constructor() {
    super();
    this.state = {
      isActive: false
    };
  }
  render() {
    const { isActive } = this.state;
    return (
      <div className="sittings-section ">
        <div className="section-btn  d-flex align-items-center justify-content-between">
          <p
            className="section-btn-text "
            onClick={() => this.setState({ isActive: !this.state.isActive })}
          >
            Subscription
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
          <div className="section-sub-wrapper d-flex flex-wrap align-items-center justify-content-center">
            <div className="current-plan">
              <a> Current Plan</a>
            </div>
            <button className="pass-save-btn mt-5">Change Plan</button>
          </div>
        )}
      </div>
    );
  }
}

export default Subscription;
