import React, { Component } from "react";
import Password from "./Password";
import GeneralSittings from "./GeneralSettings";
import Subscription from "./Subscription";
import Delete from "./Delete";
import Header from "../Header";

class Sittings extends Component {
  render() {
    return (
      <div className="container-fluid position-realtive">
        <Header />
        <div className="container col-4 offset-4 d-flex justify-content-center">
          <div className="mt-5">
            <div className="d-flex justify-content-center">
              <button className="pass-save-btn mb-5">Log Out</button>
            </div>
            <Password />
            <GeneralSittings />
            <Subscription />
            <Delete />
          </div>
        </div>
      </div>
    );
  }
}

export default Sittings;
