import React, { Component } from 'react';

export default class GetIdeasPagination extends Component {
    constructor() {
        super();
        this.state = {
            numbersPerPage: 4,
            take: 4,
            data: [
                {id: 1},
                {id: 2},
                {id: 3},
                {id: 4},
                {id: 5},
                {id: 6},
                {id: 7},
                {id: 8},
                {id: 9},
                {id: 10},
            ]
        }
    }
    changePagination = (pageNumber) => {
        const { numbersPerPage } = this.state;
        const nextPage = (pageNumber - 1) * numbersPerPage;
        this.setState({
            take: nextPage
        })
    }
    renderPagination = () => {
        const { data, numbersPerPage } = this.state;
        const pageCount = Math.ceil(data.length/numbersPerPage);
        const buttonPagination = [];
        for(let i = 1; i < pageCount; i++) {
            buttonPagination.push(
            <a href="#" className="getIdea_pagination-item" 
               onClick={() => {this.changePagination(i)}}>{i},</a>
            )
        }
        return buttonPagination
    }

    render() {
        return (
        <div className="row justify-content-center">
            <div className="getIdea_pagination pagination">
                {this.renderPagination()}
                <a href="#" className="getIdea_pagination-item">3...&gt;</a>
            </div>
        </div>
    )
    }
}
