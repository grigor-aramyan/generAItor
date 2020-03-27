import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
    loginUser,
    logoutUser,
    signUpUser,
    getProfileData
} from '../../actions/userActions';

class SignInPage extends Component {
    constructor() {
        super()
        this.state = {
            emailValue: 'EMAIL',
            pswValue: ' PASSWORD'
        }
    }

    handleChange = (e) => {
        this.setState({
            emailValue: e.target.value,
            pswValue: e.target.value
        })
    }
    // will be added later
    onButtonClick = () => {
        // this.props.loginUser('brig9@example.com', '12345678');
        //this.props.logoutUser();

        // const body = {
        //     user: {
        //         email: 'brig12@example.com',
        //         password: '12345678',
        //         password_confirmation: '12345678',
        //         accountable_type: 'IdeaGeneraitor',
        //         idea_generaitor: {
        //             full_name: 'Nancy Nersesyan',
        //             avatar_uri: 'some avatar uri of Nance',
        //             description: 'it\'s my short bio)'
        //         }
        //     }
        // }

        this.props.getProfileData();
        //this.props.signUpUser(body);
    }

    render() {
        const { emailValue, pswValue } = this.state;
        return (
            <div className="container-fluid profileClick">
                <div className="row">
                    <div className="col-md-2 profileClick_logo">
                        <a href="#">
                            <img src="images/logo_white.png" alt="logo_official" />
                        </a>
                    </div>
                </div>
                <div className="row justify-content-center signIn-wrapper">
                    <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
                        <div className="signIn_title">
                            Sign in
                        </div>
                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="signIn_form">

                            <input type="email"
                                className="signIn_input"
                                value={emailValue}
                                onChange={this.handleChange} />
                            <input type="password"
                                className="signIn_input"
                                value={pswValue}
                                onChange={this.handleChange} />
                        </form>
                        <div className="account_recover">
                            <a href="#">Forgot password?</a>
                        </div>
                        <button
                            onClick={this.onButtonClick}
                            className="profileButton">
                            SIGN IN
                        </button>
                        <div className="account_recover">
                            <a href="#">Don't have an account?</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

SignInPage.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    loginUser: PropTypes.func.isRequired,
    signUpUser: PropTypes.func.isRequired,
    getProfileData: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.user.isAuthenticated
});

export default connect(mapStateToProps, {
    loginUser,
    logoutUser,
    signUpUser,
    getProfileData
})(SignInPage);