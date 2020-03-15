import React, { Component } from 'react';

export default class ProfileClick extends Component {
    constructor() {
        super()
    }

    onButtonClick = () => {}
    render() {
        return (
            <div className="container-fluid profileClick">
                <div className="row">
                    <div className="col-md-2 profileClick_logo">
                        <a href="#">
                            <img src="images/logo_white.png" alt="logo_official" />
                        </a>
                    </div>
                </div>
                <div className="row justify-content-center profileButtons-wrapper">
                    <div className="col-md-6 d-flex justify-content-around align-items-center profileClickButtons">
                        <button 
                        onClick={this.onButtonClick}
                        className="profileButton">
                            SIGN IN
                        </button>
                        <button 
                        onClick={this.onButtonClick}
                        className="profileButton">
                            SIGN OUT
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}