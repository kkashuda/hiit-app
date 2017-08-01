import { combineReducers } from 'redux';
import workoutsReducer from './workoutsReducer'
import exercisesReducer from './exercisesReducer'

const reducers = combineReducers({
    workoutsReducer,
    exercisesReducer
})

export default reducers