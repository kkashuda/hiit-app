import ExerciseApi from '../components/ExerciseApi'

function getExerciseSuccess(exercises) {
    return {type: 'GET_EXERCISES_SUCCESS', exercises}
}

const getExercise = () => {
    return function(dispatch) {
        return ExerciseApi.getExercises()
        .then(exercises => {
            dispatch(getExerciseSuccess(exercises))
            return exercises
        })
    }
}


export {
    getExerciseSuccess, 
    getExercise
}