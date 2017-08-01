import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.css'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers/reducer'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import { getWorkout } from './actions/workoutActions';
import { getExercise } from './actions/exerciseActions';


const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)  
)
store.dispatch(getExercise());
store.dispatch(getWorkout());


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

registerServiceWorker();
