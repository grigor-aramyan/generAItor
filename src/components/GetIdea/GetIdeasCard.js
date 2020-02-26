import React, { Component } from 'react';

export default class GetIdeasCard extends Component {
    render() {
        const { author_image, author_name, idea_content } = this.props;

        return (
            <div className="getIdea_box">
                <div className="d-flex align-items-center getIdea_inner">
                    <img src={author_image}
                        alt="idea-author image" />
                    <h4 className="getIdea_name">{author_name}</h4>
                </div>
                <div className="getIdea_inner-content">
                    <p>{idea_content}</p>
                    <div className="d-flex justify-content-end">
                        <a href="#">
                            <img src="images/getIdea_arrow.svg"
                                alt="know more"
                                className="getIdea_arrow" />
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}