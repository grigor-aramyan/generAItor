import React, { Component } from 'react';
import { ideas } from './ideas';
import IdeasCard from './IdeasCard';

export default class IdeasPagination extends Component {
    constructor() {
        super();
        this.state = {
            ideasPerPage: 4,
            currentPage: 1,
            lastPage: 3,
            firstPage: 0,
            numbersPerPage: 3,
        }
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
        const {
            ideasPerPage,
            numbersPerPage,
            currentPage,
            lastPage,
            firstPage
        } = this.state;

        const indexOfLastIdea = currentPage * ideasPerPage;
        const indexOfFirstIdea = indexOfLastIdea - ideasPerPage;
        const currentIdeas = ideas.slice(indexOfFirstIdea, indexOfLastIdea);
        
        const renderIdeas = currentIdeas
            .filter(item => item.id)
            .map((item, index) => {
            return <IdeasCard ideas={item} key={index} />
        })

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(ideas.length / numbersPerPage); i++) {
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
                <div className="getIdea-box">
                    <div className="row justify-content-around getIdea_main">
                        {renderIdeas}
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
