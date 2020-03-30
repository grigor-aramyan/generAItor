import React, { Component } from 'react';
import FeedbacksPagination from './FeedbacksPagination';
import Footer from '../Footer';
import Header from '../Header';


class Feedbacks extends Component {
    constructor() {
        super();
            this.state = {
                selectedBtn: 'Good',
                aboutLink: 'AboutProductServices'
            }
    }
    selectBtn = e => {
        this.setState({ selectedBtn: e.target.innerHTML });
      };
    render() {
        const { selectedBtn, aboutLink } = this.state;
        return (
            <div className="container-fluid">
                <Header />
                <div className="feedbacks-title-wrapper">
                    <h1 className="feedbacks-title">
                        Your feedbacks
                    </h1>
                </div>
                <div className="feedbacks-buttons-wrapper">
                <button
                  type="button"
                  className={selectedBtn == 'Good' ? 'btn-selected' : 'btn-non_selected'}
                  onClick={this.selectBtn}
                >
                  Good
                </button>
                <span className="right_angle">&rsaquo;</span>
                <button
                  type="button"
                  className={selectedBtn == 'Neutral' ? 'btn-selected' : 'btn-non_selected'}
                  onClick={this.selectBtn}
                >
                  Neutral
                </button>
                <span className="right_angle">&rsaquo;</span>
                <button
                  type="button"
                  className={selectedBtn == 'Bad' ? 'btn-selected' : 'btn-non_selected'}
                  onClick={this.selectBtn}
                >
                  Bad
                </button>
              </div>
              <div className="links-wrapper">
                <a
                  href=""
                  className={aboutLink === 'AboutProductServices'
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
                <span className="span_between"></span>
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
              <FeedbacksPagination />
              <Footer />
              </div>
              
        )
    }
}


export default Feedbacks;