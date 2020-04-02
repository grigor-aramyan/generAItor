import React, { Component } from 'react';

export default class ReasonForLeaving extends Component {
    constructor() {
        super()
        this.state = {
            value: '',
            checkedOption: 'reason1'
        }
    }
    handleChange = (e) => {
        this.setState({ value: e.target.value })
    }
    handleOptionChange = (e) => {
        this.setState({ checkedOption: e.target.value });

    }

    render() {
        return (
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-sm-12 reasons-wrapper">
                        <div className="row justify-content-center">
                            <div className="col-sm-12 text-center text-uppercase reason-header">
                                <h1>we're sorry to see you leaving</h1>
                            </div>
                            <form
                                onSubmit={(e) => e.preventDefault()}
                                className="reasons-form"
                            >
                                <div className="reasons-subheader">
                                    <h2>Reason for leaving</h2>
                                </div>

                                <div className="reasons">
                                    <label>
                                        <input
                                            type="radio"
                                            name="reason"
                                            value="reason1"
                                            checked={this.state.checkedOption === 'reason1'} onChange={this.handleOptionChange}
                                        /><i></i>
                                I don’t find Innovities useful.
                                </label>
                                </div>
                                <div className="reasons">
                                    <label>
                                        <input
                                            type="radio"
                                            name="reason"
                                            value="reason2"
                                            checked={this.state.checkedOption === 'reason2'} onChange={this.handleOptionChange}
                                        /><i></i>
                                I don’t understand how to use Innovities.
                                </label>
                                </div>
                                <div className="reasons">
                                    <label>
                                        <input
                                            type="radio"
                                            name="reason"
                                            value="reason3"
                                            checked={this.state.checkedOption === 'reason3'} onChange={this.handleOptionChange}
                                        /><i></i>
                                I get to many emails.
                                </label>
                                </div>
                                <div className="reasons">
                                    <label>
                                        <input
                                            type="radio"
                                            name="reason"
                                            value="reason4"
                                            checked={this.state.checkedOption === 'reason4'} onChange={this.handleOptionChange}
                                        /><i></i>
                                Other reason, please explain further.
                                </label>
                                </div>
                                <div className="textarea">
                                    <textarea
                                        className="reasons-textarea"
                                        rows="6" cols="56"
                                        value={this.state.value}
                                        onChange={this.handleChange}
                                    ></textarea>
                                </div>
                                <div className="d-flex justify-content-center submit-wrapper">
                                    <button className="confirm-button">CONFIRM</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}