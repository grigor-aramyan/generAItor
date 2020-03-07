import React, { Component } from 'react';

export default class GetIdeas extends Component {
    constructor() {
        super();
        this.state = {
            keywords: [],
            tempKeywords: '',
        }
    }
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
            let oldKeywords = this.state.keywords;
            oldKeywords.push(this.state.tempKeywords);

            this.setState({
                keywords: oldKeywords,
                tempKeywords: ''
            });
        }
    };

    render() {
        const { keywords, tempKeywords } = this.state;
        return (
            <div className="container-fluid getIdea-wrapper">
                <div className="row justify-content-center">
                    <div className="col-10 offset-1 col-lg-8 offset-lg-2 d-flex justify-content-center align-items-center text-uppercase getIdea-title">
                        <h2>Get Ideas</h2>
                    </div>
                    <form
                        onSubmit={(e) => e.preventDefault()}>

                        <div className="enter_field-wrapper">
                            <h4 className="enter_field-title">Enter the Field <span className="title-star">&#42;</span></h4>
                            <div className="d-flex justify-content-center">
                                <input type="text"
                                    className="enter-field-input"
                                    placeholder="Market"
                                    onChange={this.handleChange} />
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
                                value={tempKeywords}
                                className="enter-field-input"
                                onChange={this.setTempKeywords}
                                onKeyPress={this.setKeywords}
                            />
                            <div className="keywords-box">
                                {keywords.length
                                    ? keywords.map((el, i) => {
                                        return (
                                            <div className="keyword-items" key={i}>
                                                <span className="keyword-item">{el}</span>
                                            </div>
                                        )
                                    })
                                    : null}
                            </div>

                            <div className="d-flex justify-content-center confirm-cancel-wrapper">
                                <button className="confirm-button">FIND</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}