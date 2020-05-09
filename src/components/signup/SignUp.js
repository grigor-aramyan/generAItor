import React, { Component } from "react";
import { connect } from "react-redux";
import { signUpUser } from "../../actions/userActions";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      aboutLink: "IdeaGenerator",
      email: "",
      password: "",
      confirmPassword: "",
      errorMsg: "",
    };
  }

  onSignUpUser = () => {
    const { aboutLink, email, password, confirmPassword } = this.state;

    if (!email) {
      this.setState({
        errorMsg: "Email required!",
      });
    } else if (!password) {
      this.setState({
        errorMsg: "Password required!",
      });
    } else if (password.length < 8) {
      this.setState({
        errorMsg: "Password should contain at least 8 symbols",
      });
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      this.setState({
        errorMsg: "Email format looks invalid",
      });
    } else if (password != confirmPassword) {
      this.setState({
        errorMsg: "Password and confirm password don't match",
      });
    } else {
      this.setState({
        errorMsg: "",
      });

      let organization = null;
      let idea_generaitor = null;
      if (aboutLink == "Organization") {
        organization = {
          name: "",
          logo_uri: "",
          description: "",
        };
      } else if (aboutLink == "IdeaGenerator") {
        idea_generaitor = {
          full_name: "",
          avatar_uri: "",
          description: "",
        };
      } else {
        this.setState({
          errorMsg: "Something weird happened! Contact with us, please!",
        });
        return;
      }

      const body = {
        user: {
          email: email,
          password: password,
          password_confirmation: confirmPassword,
          accountable_type:
            aboutLink == "IdeaGenerator" ? "IdeaGeneraitor" : "Organization",
        },
      };
      if (aboutLink == "IdeaGenerator") {
        body.user["idea_generaitor"] = idea_generaitor;
      } else {
        body.user["organization"] = organization;
      }

      this.props.signUpUser(body);
    }
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const {
      aboutLink,
      email,
      password,
      confirmPassword,
      errorMsg,
    } = this.state;
    return (
      <div>
        <div className='container-fluid signup-wrapper'>
          {/* <div className="row">
            <div className="col-2 p-4">
              <div className="signup-logo">
                <a href="#">
                  <img src="images/logo_white.png" alt="logo_official" />
                </a>
              </div>
            </div>
          </div> */}
          <div className='row'>
            <div className='col-10 offset-1 col-lg-8 offset-lg-2 d-flex justify-content-center align-items-center'>
              <form
                className='signup-form'
                onSubmit={(e) => e.preventDefault()}
              >
                <div className='signup-title-wrapper'>
                  <h1 className='signup-title'>SIGN UP</h1>
                </div>
                <div className='idea-generator-wrapper'>
                  <a
                    href=''
                    className={
                      aboutLink === "Organization"
                        ? "idea-links yellow-link"
                        : "idea-links "
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      this.setState({ aboutLink: "Organization" });
                    }}
                  >
                    Organization
                  </a>
                  <span className='or-span'>/</span>
                  <a
                    href=''
                    className={
                      aboutLink === "IdeaGenerator"
                        ? "idea-links yellow-link"
                        : "idea-links "
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      this.setState({ aboutLink: "IdeaGenerator" });
                    }}
                  >
                    Idea Generator
                  </a>
                </div>
                <div className='signup-input-wrapper'>
                  <input
                    type='text'
                    className='signup-input'
                    placeholder='Email'
                    name='email'
                    value={email}
                    onChange={this.handleChange}
                  />
                  <input
                    type='password'
                    className='signup-input'
                    placeholder='Password'
                    name='password'
                    value={password}
                    onChange={this.handleChange}
                  />
                  <input
                    type='password'
                    className='signup-input'
                    placeholder='Confirm Password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={this.handleChange}
                  />
                </div>
                <div className='signup-policy-wrapper'>
                  <p className='signup-policy-text'>
                    By creating your account you agree to our <br />
                    <a href='' className='signup-policy-link'>
                      Privacy
                    </a>{" "}
                    &{" "}
                    <a href='' className='signup-policy-link'>
                      Cookie Policy
                    </a>{" "}
                  </p>
                </div>
                {errorMsg ? (
                  <span className='local_err_msg_centered'>{errorMsg}</span>
                ) : null}
                <div className='signup-button-wrapper'>
                  <button className='signup-button' onClick={this.onSignUpUser}>
                    Sign Up
                  </button>
                </div>
                <div className='middle-text-wrapper'>
                  <p className='middle-text'>OR</p>
                </div>
                <div className='social-buttons-wrapper'>
                  <p className='social-text'>Sign up with</p>
                  <a href=''>
                    <img
                      src='images/google-logo.png'
                      alt=''
                      className='social-logos'
                    />
                  </a>
                  <a href=''>
                    <img
                      src='images/facebook-logo.png'
                      alt=''
                      className='social-logos'
                    />
                  </a>
                </div>

                <div className='have-account-wrapper'>
                  <Link to='/signIn' className='have-account-text'>
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

SignUp.propTypes = {
  signUpUser: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  error: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.user.isAuthenticated,
  error: state.error,
});

export default connect(mapStateToProps, {
  signUpUser,
})(SignUp);
