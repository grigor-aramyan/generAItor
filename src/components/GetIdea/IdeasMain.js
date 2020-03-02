import React, { Component } from 'react';
import IdeasPagination from './IdeasPagination';

export default class IdeasMain extends Component {
    constructor() {
        super();

    }
    render() {
        return (
            <div className="container-fluid getIdea-wrapper">
                <div className="row justify-content-center">
                    <div className="col col-md-4 text-center text-uppercase getIdea-title">
                        <h2>Get Ideas</h2>
                    </div>
                </div>
                <IdeasPagination />
            </div>
        )
    }
}