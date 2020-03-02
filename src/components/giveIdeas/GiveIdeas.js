import React, { Component } from 'react';
export default class GiceIdeas extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className = 'give-ideas ' >
                <h2>GIVE IDEAS</h2>
                <p className = 'give-title'>Enter the Field or Organization <span className = 'required'>*</span></p>
                <div className = 'd-flex justify-content-center'>
                    <input type = 'text'  className = 'organizations' placeholder = 'Ros' />
                </div>
                <p className = 'give-title product-service'>About Product / Services <span>OR</span> <span>About Customer Service</span></p>
                <p className = 'give-title'>Select the Adress <span className = 'required'>*</span></p>
                <div className = 'd-flex justify-content-center'>
                    <input type = 'text' className = 'adress' />
                </div>
                <p className = 'give-title'>Write Your Feedback</p>
                <div className = 'd-flex justify-content-center parent-notes'>
                    <textarea cols="50" rows="10" class="notes"></textarea>
                </div>
                 <p className = 'give-title'>Enter Keywords</p>
                 <div className = 'd-flex justify-content-center align-items-center flex-column'>
                    <input type = 'text' className = 'keyword' />
                </div>
                <button className = 'telecom'>Telecomunication</button>
                <div className = 'confirm_cancel d-flex justify-content-center'>
                    <button className = 'confirm-button'>CONFIRM</button>
                    <button className = 'cancel-button'>Cancel</button>
                </div>
            </div>
        )
    }
}
