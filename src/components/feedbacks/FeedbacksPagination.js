import React, { Component } from 'react';
import { ideas } from '../GetIdea/ideas';
import FeedbacksCard from './FeedbacksCard';
import { getFeedbacks } from '../../actions/feedbacksActions';
import { connect } from 'react-redux';

class FeedbacksPagination extends Component {
    constructor() {
        super();
        this.state = {
            feedbackPerPage: 2,
            currentPage: 1,
            lastPage: 3,
            firstPage: 0,
            numbersPerPage: 3,
        }
    }

    componentDidMount() {
        this.props.getFeedbacks();
    }

    handleClick = (event) => {
        this.setState({ currentPage: +event.target.id });
    }
    // three dots functional > move to the next 3 pages
    btnIncrementClick = () => {
        const { firstPage, lastPage, numbersPerPage } = this.state;
        this.setState({
            lastPage: lastPage + numbersPerPage,
            firstPage: firstPage + numbersPerPage,
        });
        let clicked = lastPage + 1;
        this.setState({ currentPage: clicked });
    }

    btnDecrementClick = () => {
        const { firstPage, lastPage, numbersPerPage } = this.state;
        this.setState({
            lastPage: lastPage - numbersPerPage,
            firstPage: firstPage - numbersPerPage
        });
        let clicked = lastPage - numbersPerPage;
        this.setState({ currentPage: clicked });
    }
    // move to the next or previous page
    btnNextClick = () => {
        const { currentPage, lastPage, firstPage, numbersPerPage } = this.state;
        if (currentPage + 1 > lastPage) {
            this.setState({
                lastPage: lastPage + numbersPerPage,
                firstPage: firstPage + numbersPerPage
            });
        }
        let clicked = currentPage + 1;
        this.setState({ currentPage: clicked });
    }

    btnPrevClick = () => {
        const { currentPage, lastPage, firstPage, numbersPerPage } = this.state;
        if ((currentPage - 1) % numbersPerPage === 0) {
            this.setState({
                lastPage: lastPage - numbersPerPage,
                firstPage: firstPage - numbersPerPage
            });
        }
        let clicked = currentPage - 1;
        this.setState({ currentPage: clicked });
    }

    render() {
        const { feedbacks } = this.props;

        const {
            feedbackPerPage,
            numbersPerPage,
            currentPage,
            lastPage,
            firstPage
        } = this.state;

        const indexOfLastIdea = currentPage * feedbackPerPage;
        const indexOfFirstIdea = indexOfLastIdea - feedbackPerPage;
        const currentFeedback = feedbacks.slice(indexOfFirstIdea, indexOfLastIdea);
        
        const renderFeedback = currentFeedback
            .filter(item => item.id)
            .map((item, index) => {
            return <FeedbacksCard ideas={item} key={index} />
        })

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(feedbacks.length / feedbackPerPage); i++) {
            pageNumbers.push(i);
        }
        const renderPageNumber = pageNumbers.map(number => {
            if (number === 1 && currentPage === 1) {
                return (
                    <li key={number} id={number}>
                        <a href="#" id={number} className={`getIdea_pagination-item${currentPage === number ? ' active' : ''}`}
                            onClick={this.handleClick}>{number}
                        </a>
                    </li>
                )
            }
            else if (number < lastPage + 1 && number > firstPage) {
                return (
                    <li key={number} id={number}>
                        <a href="#" id={number} className={`getIdea_pagination-item${currentPage === number ? ' active' : ''}`}
                            onClick={this.handleClick}>{number}
                        </a>
                    </li>
                )
            }
        })

        const renderNextThreeDots = () => {
            if (pageNumbers.length > lastPage) {
                return <li><a href="#" className="getIdea_pagination-item"
                    onClick={this.btnIncrementClick}>&hellip;</a></li>
            }
        };
        const renderPrevThreeDots = () => {
            if (firstPage >= 1) {
                return <li><a href="#" className="getIdea_pagination-item"
                    onClick={this.btnDecrementClick}>&hellip;</a></li>
            }
        };
        const renderPrevButton = () => {
            if (firstPage >= 1) {
                return <li><a href="#" className="getIdea_pagination-item"
                    onClick={this.btnPrevClick}>&lt;</a></li>;
            }
        };

        const renderNextButton = () => {
            if (pageNumbers.length > lastPage) {
                return <li><a href="#" className="getIdea_pagination-item"
                    onClick={this.btnNextClick}> &gt;</a></li>
            }
        };

        return (
            <div className="containter-fluid">
                <div className="feedback-box">
                    <div className="row justify-content-around fedback-card">
                        {renderFeedback}
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="getIdea_pagination pagination">
                        {renderPrevButton()}
                        {renderPrevThreeDots()}
                        {renderPageNumber}
                        {renderNextThreeDots()}
                        {renderNextButton()}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    feedbacks: state.feedbacks
})
const mapDispatchToProps = {
    getFeedbacks
}

export default connect(mapStateToProps, mapDispatchToProps)(FeedbacksPagination)