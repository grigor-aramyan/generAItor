import React, { Component } from 'react';

export default class SignInPage extends Component {
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
    onButtonClick = () => {}

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