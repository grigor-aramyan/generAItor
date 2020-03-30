import React from 'react';

const FeedbacksCard = ({ ideas }) => {
    
    const { author_image, author_name, idea_content, id } = ideas;
    return (
        <div className="row justify-content-around feedback-card">
        <div key={id} className="feedback_box">
            <div className="d-flex align-items-center getIdea_inner">
                <img src={author_image}
                    alt={author_name} />
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
        </div>
    )
}

export default FeedbacksCard;
