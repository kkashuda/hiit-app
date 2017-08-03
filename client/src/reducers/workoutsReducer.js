
export default function workoutsReducer(state = [], action) {
    debugger
    switch(action.type) {
        case 'GET_WORKOUTS_SUCCESS': 
            return action.workouts;
        case 'CREATE_WORKOUT_SUCCESS': 
            return action.workouts;
        default: 
        return state;
    }
}