import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      aboutLink: 'IdeaGenerator',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { aboutLink, email, password, confirmPassword } = this.state;
    return (
      <div>
        <div className="container-fluid signup-wrapper">
          <div className="row">
            <div className="col-2 p-4">
              <div className="signup-logo">
                <a href="#">
                  <img src="images/logo_white.png" alt="logo_official" />
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-10 offset-1 col-lg-8 offset-lg-2 d-flex justify-content-center align-items-center">
              <form action="/signup" method="POST" className="signup-form">
                <div className="signup-title-wrapper">
                  <h1 className="signup-title">SIGN UP</h1>
                </div>
                <div className="idea-generator-wrapper">
                  <a
                    href=""
                    className={
                      aboutLink === 'Organization'
                        ? 'idea-links yellow-link'
                        : 'idea-links '
                    }
                    onClick={e => {
                      e.preventDefault();
                      this.setState({ aboutLink: 'Organization' });
                    }}
                  >
                    Organization
                  </a>
                  <span className="or-span">/</span>
                  <a
                    href=""
                    className={
                      aboutLink === 'IdeaGenerator'
                        ? 'idea-links yellow-link'
                        : 'idea-links '
                    }
                    onClick={e => {
                      e.preventDefault();
                      this.setState({ aboutLink: 'IdeaGenerator' });
                    }}
                  >
                    Idea Genrator
                  </a>
                </div>
                <div className="signup-input-wrapper">
                  <input
                    type="text"
                    className="signup-input"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                  />
                  <input
                    type="password"
                    className="signup-input"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                  />
                  <input
                    type="password"
                    className="signup-input"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="signup-policy-wrapper">
                  <p className="signup-policy-text">
                    By creating your account you agree to our{' '}
                    <a href="" className="signup-policy-link">
                      Privacy
                    </a>{' '}
                    &{' '}
                    <a href="" className="signup-policy-link">
                      Cookie Policy
                    </a>{' '}
                  </p>
                </div>
                <div className="signup-button-wrapper">
                  <button className="signup-button">Sign Up</button>
                </div>
                <div className="middle-text-wrapper">
                  <p className="middle-text">OR</p>
                </div>
                <div className="social-buttons-wrapper">
                  <p className="social-text">Sing up with</p>
                  <a href="">
                    <img
                      src="images/google-logo.png"
                      alt=""
                      className="social-logos"
                    />
                  </a>
                  <a href="">
                    <img
                      src="images/facebook-logo.png"
                      alt=""
                      className="social-logos"
                    />
                  </a>
                </div>

                <div className="have-account-wrapper">
                  <Link to="/signIn" className="have-account-text">
                    Already have an account?
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
