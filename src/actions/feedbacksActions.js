import {
    GET_FEEDBACK,
    GET_FEEDBACK_FAILED
} from '../actions/types';
import { ideas } from '../components/GetIdea/ideas';

export const getFeedbacks = id => (dispatch, getState) => {
    // const feedbacks = [ideas]
    const feedbacks = [
        { id: 1, author_image: "images/get_idea_img.jpg", author_name: "Tiera Guinn", idea_content: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. " },
    { id: 2, author_image: "images/get_idea_img.jpg", author_name: "Marie Curie", idea_content: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. " },
    { id: 3, author_image: "images/get_idea_img.jpg", author_name: "Name3", idea_content: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. " },
    { id: 4, author_image: "images/get_idea_img.jpg", author_name: "Name4", idea_content: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. " },
    { id: 5, author_image: "images/get_idea_img.jpg", author_name: "Name5", idea_content: "Lorem ipsum dolor sit amet" },
    { id: 6, author_image: "images/get_idea_img.jpg", author_name: "Name6", idea_content: "Lorem ipsum dolor sit amet" },
    ]

try {
    dispatch({
        type: GET_FEEDBACK,
        payload: feedbacks
    })
} catch(e) {
    dispatch({
        type: GET_FEEDBACK_FAILED,
        payload: e.message
    })
}
};