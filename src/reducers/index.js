import { combineReducers } from 'redux';

export default combineReducers({
    auth: authReducer,
    error: errorReducer,
    lesson: lessonReducer,
    course: courseReducer,
    lessonOngoing: lessonOngoingReducer,
    courseOngoing: courseOngoingReducer,
    learner: learnerReducer,
    teacher: teacherReducer,
    exercise: exerciseReducer,
    audioExercise: audioExerciseReducer
});