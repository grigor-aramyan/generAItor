import { 
    GET_FEEDBACK, 
    GET_FEEDBACK_FAILED 
} from "../actions/types";

const initialState = [];
// {
//     feedbacks: []
// };

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_FEEDBACK:
            state = action.payload;
            return state;
        case GET_FEEDBACK_FAILED:
            return state;
        default:
            return state;
    }
}