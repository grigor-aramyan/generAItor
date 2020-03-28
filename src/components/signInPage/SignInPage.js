import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
    loginUser
} from '../../actions/userActions';

class SignInPage extends Component {
    constructor() {
        super()
        this.state = {
            emailValue: '',
            pswValue: '',
            errorMsg: ''
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    
    onButtonClick = () => {
        const {
            emailValue,
            pswValue
        } = this.state;

        if (!emailValue) {
            this.setState({
                errorMsg: 'Email required!'
            });
        } else if (!pswValue) {
            this.setState({
                errorMsg: 'Password required!'
            });
        } else if (pswValue.length < 8) {
            this.setState({
                errorMsg: 'Password should contain at least 8 symbols'
            });
        } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue))) {
            this.setState({
                errorMsg: 'Email format looks invalid'
            });
        } else {
            this.setState({
                errorMsg: ''
            });

            this.props.loginUser(emailValue, pswValue);
        }
        
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

        // this.props.getProfileData();
        //this.props.signUpUser(body);
    }

    render() {
        
        const { emailValue, pswValue, errorMsg } = this.state;

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
                                placeholder='Email...'
                                value={emailValue}
                                name='emailValue'
                                onChange={this.handleChange} />
                            <input type="password"
                                className="signIn_input"
                                placeholder='Password...'
                                value={pswValue}
                                name='pswValue'
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
                        { errorMsg ?
                            <span className='local_err_msg'>
                                { errorMsg }
                            </span>
                        : null
                        }
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
    loginUser: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    error: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.user.isAuthenticated,
    error: state.error
});

export default connect(mapStateToProps, {
    loginUser
})(SignInPage);