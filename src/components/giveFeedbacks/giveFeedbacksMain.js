import React, { Component } from 'react';

export default class GiveFeedbacksMain extends Component {
  constructor() {
    super();
    this.state = {
      orgName: '',
      address: '',
      feedbackTextarea: '',
      keywords: [],
      tempKeywords: [],
      selectedBtn: 'Good',
      aboutLink: 'AboutCustomerService'
    };
  }
  selectBtn = e => {
    this.setState({ selectedBtn: e.target.innerHTML });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  setTempKeywords = e => {
    const word = e.target.value
      .replace(/,|;/g, '')
      .trim()
      .split(' ')
      .filter(m => m !== '');
    this.setState({ tempKeywords: word });
  };

  setKeywords = () => {
    if (event.keyCode === 13) {
      this.setState({ keywords: this.state.tempKeywords });
    }
  };

  render() {
    const { keywords, selectedBtn, aboutLink } = this.state;
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 offset-1 col-lg-8 offset-lg-2  d-flex justify-content-center align-items-center">
            <form
              action="/giveFedback"
              method="POST"
              className="give-feedbacks-form-wrapper"
            >
              <div className="feedback-title-wrapper">
                <h3 className="feedback-title">WRITE FEEDBACK</h3>
              </div>
              <div className="sec-title-wrapper">
                <h4 className="sec-title">
                  Enter the Field or Organization{' '}
                  <span className="title-star">&#9913;</span>
                </h4>
              </div>
              <input
                type="text"
                className="enter-field-input"
                name="orgName"
                onChange={this.handleChange}
              />
              <ul className="finded-org-list-group">
                <li className="finded-org-list-item">Rostelecom</li>
              </ul>
              <div className="links-wrapper">
                <a
                  href=""
                  className={
                    aboutLink === 'AboutProductServices'
                      ? 'about-links yellow'
                      : 'about-links'
                  }
                  onClick={e => {
                    e.preventDefault();
                    return this.setState({ aboutLink: 'AboutProductServices' });
                  }}
                >
                  About Product / Services
                </a>
                <span className="or">or</span>
                <a
                  href=""
                  className={
                    aboutLink === 'AboutCustomerService'
                      ? 'about-links yellow'
                      : 'about-links'
                  }
                  onClick={e => {
                    e.preventDefault();
                    return this.setState({ aboutLink: 'AboutCustomerService' });
                  }}
                >
                  About Customer Service
                </a>
              </div>
              <div className="address-title-wrapper">
                <h4 className="address-title">
                  Select the Address <span className="title-star">&#9913;</span>
                </h4>
              </div>
              <input
                type="text"
                className="address-input"
                name="address"
                onChange={this.handleChange}
              />
              <div className="write-feedback-title-wrapper">
                <h4 className="write-feedback-title">
                  Write Your Feedback
                  <span className="title-star">&#9913;</span>
                </h4>
              </div>
              <textarea
                name="feedbackTextarea"
                id=""
                cols="65"
                rows="5"
                className="feedbackTextarea"
                onChange={this.handleChange}
              ></textarea>
              <div className="enter-keywords-title-wrapper">
                <h4 className="enter-keywords-title">Enter Keywords</h4>
              </div>

              <input
                type="text"
                name="keywords"
                className="keywords-input"
                onChange={this.setTempKeywords}
                onKeyPress={this.setKeywords}
              />

              <div className="keywords-wrapper">
                {keywords.length
                  ? keywords.map((e, i) => {
                      return (
                        <div className="my-keyword" key={i}>
                          <p className="keyword-text">{e}</p>
                        </div>
                      );
                    })
                  : null}
              </div>
              <div className="buttons-wrapper">
                <button
                  type="button"
                  className={selectedBtn == 'Good' ? 'selected-btn' : 'btns'}
                  onClick={this.selectBtn}
                >
                  Good
                </button>
                <button
                  type="button"
                  className={selectedBtn == 'Neutral' ? 'selected-btn' : 'btns'}
                  onClick={this.selectBtn}
                >
                  Neutral
                </button>
                <button
                  type="button"
                  className={selectedBtn == 'Bad' ? 'selected-btn' : 'btns'}
                  onClick={this.selectBtn}
                >
                  Bad
                </button>
              </div>

              <div className="confirm-cancel-wrapper">
                <div className="confirm-wrapper">
                  <a href="#">Confirm</a>
                </div>
                <div className="cancel-wrapper">
                  <a href="#">Cancel</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
