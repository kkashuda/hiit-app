import WorkoutApi from '../workoutApi'; 


function getWorkoutSuccess(workouts) {
    return {type: 'GET_WORKOUTS_SUCCESS', workouts}
}

const getWorkout = () => {
    return function(dispatch) {
        return WorkoutApi.getWorkouts().then(workouts => {
            dispatch(getWorkoutSuccess(workouts))
        })
    }
}

export {
    getWorkoutSuccess, 
    getWorkout
}