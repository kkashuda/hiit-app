export default function exercisesReducer(state = [], action) {
    debugger
    switch(action.type) {
        case 'GET_EXERCISES_SUCCESS': 
            return action.exercises
        default: 
            return state
    }
}