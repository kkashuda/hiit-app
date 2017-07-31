import WorkoutApi from '../components/WorkoutApi'; 


function getWorkoutSuccess(workouts) {
    return {type: 'GET_WORKOUTS_SUCCESS', workouts}
}

function createWorkoutSuccess(workout) {
    return {type: 'CREATE_WORKOUT_SUCCESS', workout}
}

const getWorkout = () => {
    return function(dispatch) {
        return WorkoutApi.getWorkouts().then(workouts => {
            dispatch(getWorkoutSuccess(workouts))
        })
    }
}

const createWorkout = (workout) => {
    return function(dispatch) {
        return WorkoutApi.createWorkout(workout).then(response => {
            dispatch(createWorkoutSuccess(response));
            return response; 
        })
    }
}

export {
    getWorkoutSuccess, 
    getWorkout
}