import React, { Component } from 'react';
import GetIdeasCard from './GetIdeasCard';
import GetIdeasPagination from './GetIdeasPagination';

export default class GetIdeasMain extends Component {
    constructor() {
        super();

        this.state = {
            author_image: '',
            author_name: '',
            idea_content: '',
            idea_id: '',
        }

    }
    render() {
        const { author_image, author_name, idea_content, idea_id} = this.props;
        return (
            <div className="container-fluid getIdea-wrapper">
                <div className="row justify-content-center">
                    <div className="col col-md-4 text-center text-uppercase getIdea-title">
                        <h2>Get Ideas</h2>
                    </div>
                </div>

                <div className="row justify-content-around getIdea_main">
                        <GetIdeasCard 
                        author_image="images/get_idea_img.jpg"
                        author_name="Mary Nersisyan"
                        idea_content="Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem
                        ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
                        dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor
                        sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit
                        amet Lorem ipsum dolor sit amet"
                        />
                        <GetIdeasCard 
                        author_image="images/get_idea_img.jpg"
                        author_name="Mary Nersisyan"
                        idea_content="Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem
                        ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
                        dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor
                        sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit
                        amet Lorem ipsum dolor sit amet"
                        />
                        <GetIdeasCard 
                        author_image="images/get_idea_img.jpg"
                        author_name="Mary Nersisyan"
                        idea_content="Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem
                        ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
                        dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor
                        sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit
                        amet Lorem ipsum dolor sit amet"
                        />
                        <GetIdeasCard 
                        author_image="images/get_idea_img.jpg"
                        author_name="Mary Nersisyan"
                        idea_content="Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem
                        ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
                        dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor
                        sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit
                        amet Lorem ipsum dolor sit amet"
                        />
                       
                    </div>
                    <GetIdeasPagination />
            </div>
        )
    }
}