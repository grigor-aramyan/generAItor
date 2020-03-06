import React, { Component } from 'react';

export default class GetIdeas extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="container-fluid getIdea-wrapper">
                <div className="row justify-content-center">
                    <div className="col-10 offset-1 col-lg-8 offset-lg-2 d-flex justify-content-center align-items-center text-uppercase getIdea-title">
                        <h2>Get Ideas</h2>
                    </div>

                    <div className="enter_field-wrapper">
                        <h4 className="enter_field-title">Enter the Field <span className="title-star">&#42;</span></h4>
                        <div className="d-flex justify-content-center">
                            <input type="text"
                                className="enter-field-input"
                                placeholder="Market" />
                        </div>
                        <ul className="ideas-list">
                            <li className="ideas-list-item">Marketing</li>
                        </ul>

                        <div className="enter-keywords-title-wrapper">
                            <h4 className="enter_field-title">Enter Keywords</h4>
                        </div>

                        <input
                            type="text"
                            name="keywords"
                            className="enter-field-input"

                        />
                        <div className="keywords-box">
                            <div className="keyword-items">
                                <span className="keyword-item">Telecomunication</span>
                            </div>
                        </div>

                        <div className="confirm_cancel d-flex justify-content-center">
                            <button className="confirm-button">FIND</button>

                        </div>
                    </div>
                </div>

            </div>
        )
    }
}