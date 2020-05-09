import React, { Component } from "react";
import { Redirect } from "react-router";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  loginUser,
  getMyProfileData,
  loadLocalToken,
} from "../../actions/userActions";
import Header from "../Header";

class SignInPage extends Component {
  componentDidMount() {
    const { loadLocalToken, getMyProfileData } = this.props;

    loadLocalToken();
    getMyProfileData();
  }

  componentDidUpdate() {
    const { isAuthenticated, getMyProfileData } = this.props;

    if (isAuthenticated) {
      getMyProfileData();
    }
  }

  constructor() {
    super();
    this.state = {
      emailValue: "",
      pswValue: "",
      errorMsg: "",
      aboutLink: "IdeaGenerator",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onButtonClick = () => {
    const { emailValue, pswValue } = this.state;

    if (!emailValue) {
      this.setState({
        errorMsg: "Email required!",
      });
    } else if (!pswValue) {
      this.setState({
        errorMsg: "Password required!",
      });
    } else if (pswValue.length < 8) {
      this.setState({
        errorMsg: "Password should contain at least 8 symbols",
      });
    } else if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue)
    ) {
      this.setState({
        errorMsg: "Email format looks invalid",
      });
    } else {
      this.setState({
        errorMsg: "",
      });

      this.props.loginUser(emailValue, pswValue);
    }

    //this.props.logoutUser();

    // this.props.getProfileData();
  };

  render() {
    const { currentUser } = this.props;

    if (currentUser) {
      if (currentUser.profile_type == "Organization") {
        return <Redirect to='/profiles/me/o' />;
      } else if (currentUser.profile_type == "IdeaGeneraitor") {
        return <Redirect to='/profiles/me/i' />;
      }
    }

    const { emailValue, pswValue, aboutLink, errorMsg } = this.state;

    return (
      <div className='container-fluid profileClick'>
        {/* <div className="row">
                    <div className="col-md-2 profileClick_logo">
                        <a href="#">
                            <img src="images/logo_white.png" alt="logo_official" />
                        </a>
                    </div>
                </div> */}
        <div className='row justify-content-center signIn-wrapper'>
          <div className='col-md-6 d-flex flex-column justify-content-center align-items-center'>
            <div className='signIn_title'>Sign in</div>
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
                Idea Genrator
              </a>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className='signIn_form'>
              <input
                type='email'
                className='signIn_input'
                placeholder='Email...'
                value={emailValue}
                name='emailValue'
                onChange={this.handleChange}
              />
              <input
                type='password'
                className='signIn_input'
                placeholder='Password...'
                value={pswValue}
                name='pswValue'
                onChange={this.handleChange}
              />
            </form>
            <div className='account_recover'>
              <a href='#'>Forgot password?</a>
            </div>
            <button onClick={this.onButtonClick} className='profileButton'>
              SIGN IN
            </button>
            {errorMsg ? (
              <span className='local_err_msg'>{errorMsg}</span>
            ) : null}
            <div className='account_recover'>
              <a href='#'>Don't have an account?</a>
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
          </div>
        </div>
      </div>
    );
  }
}

SignInPage.propTypes = {
  loginUser: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  error: PropTypes.object.isRequired,
  getMyProfileData: PropTypes.func.isRequired,
  currentUser: PropTypes.object,
  loadLocalToken: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.user.isAuthenticated,
  error: state.error,
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps, {
  loginUser,
  getMyProfileData,
  loadLocalToken,
})(SignInPage);
