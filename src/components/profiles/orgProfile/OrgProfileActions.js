import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class OrgProfileActions extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        {this.props.isLogged ? (
          <div>
            <div className="container-fluid">
              <div className="row">
                <div className="col-10 offset-1 col-lg-8 offset-lg-2 div-wrapper d-flex justify-content-center align-items-center">
                  <div className="org-btnsTitle-wrapper">
                    <h1>YOU CAN</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-10 offset-1 col-lg-8 offset-lg-2 div-wrapper d-flex justify-content-center align-items-center">
                <div className="links-wrapper d-flex">
                  <div className="write-feedback-btn-wrapper">
                    <Link to="/" className="feedback-link">
                      WRITE FEEDBACK
                    </Link>
                  </div>
                  <div className="or-wrapper">
                    <span>OR</span>
                  </div>
                  <div className="give-idea-btn-wrapper">
                    <Link to="/" className="idea-link">
                      GIVE IDEA
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-10 offset-1 col-lg-8 offset-lg-2 div-wrapper d-flex justify-content-center align-items-center">
                <div className="links-wrapper d-flex">
                  <div className="write-feedback-btn-wrapper">
                    <Link to={'/'} className="feedback-link">
                      WRITE FEEDBACK
                    </Link>
                  </div>
                  <div className="or-wrapper">
                    <span>OR</span>
                  </div>
                  <div className="give-idea-btn-wrapper">
                    <Link to={'/'} className="idea-link">
                      GIVE IDEA
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
