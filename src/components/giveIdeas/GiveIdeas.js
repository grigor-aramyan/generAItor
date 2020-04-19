import React, { Component } from 'react';
import Header from '../Header';

export default class GiveIdeas extends Component {
    constructor() {
        super();
        this.state = {
            orgName: '',
            ideaTextarea: '',
            keywords: [],
            tempKeywords: '',
          }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      };
    
      setTempKeywords = (e) => {
        const word = e.target.value
          .replace(/,|;/g, '')
          .trim()
          .split(' ')
          .filter((m) => m !== '');
        this.setState({ tempKeywords: word });
      };
    
      setKeywords = () => {
        if (event.keyCode === 13) {
          let oldKeywords = this.state.keywords;
          oldKeywords.push(this.state.tempKeywords);
    
          this.setState({
            keywords: oldKeywords,
            tempKeywords: '',
          });
        }
      };

    render() {
        const { keywords, tempKeywords } = this.state;
        return (
            <div className="container-fluid">
                <Header />
                <div className="row">
                    <div className="col-10 offset-1 col-lg-8 offset-lg-2  d-flex justify-content-center align-items-center">
                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="give-feedbacks-form-wrapper"
                        >
                            <div className="feedback-title-wrapper">
                                <h3 className="feedback-title">GIVE IDEAS</h3>
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
                                <li className="finded-org-list-item">Rostelecom Armenia</li>
                            </ul>

                            <div className="write-feedback-title-wrapper">
                                <h4 className="write-feedback-title">
                                    Write Your Idea
                            <span className="title-star">&#9913;</span>
                                </h4>
                            </div>
                            <textarea
                                name="ideaTextarea"
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
                                value={tempKeywords}
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
