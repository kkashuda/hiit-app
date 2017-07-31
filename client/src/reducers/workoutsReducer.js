
export default function workoutsReducer(state = [], action) {
    switch(action.type) {
        case 'GET_WORKOUTS_SUCCESS': 
            return action.workouts
        default: 
            return state
    }
}