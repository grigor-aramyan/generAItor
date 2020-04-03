import React, { Component } from 'react';
import Password from './Password';
import GeneralSittings from './GeneralSettings';
import Subscription from './Subscription';
import Delete from './Delete';

class Sittings extends Component {
  render() {
    return (
      <div className="container col-4 offset-4 d-flex justify-content-center">
        <div>
          <div className="d-flex justify-content-center">
            <button className="pass-save-btn mb-5">Log Out</button>
          </div>
          <Password />
          <GeneralSittings />
          <Subscription />
          <Delete />
        </div>
      </div>
    );
  }
}

export default Sittings;