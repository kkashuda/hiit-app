import React, { Component } from 'react'; 
import { Header, Label } from 'semantic-ui-react'
import { connect } from 'react-redux';
import Workouts from './Workouts';

class Exercise extends Component {

    render () {
        debugger
        const exercises = this.props.exercises;
        return (
            <div>
                {this.props.exercises && <Workouts exercises={exercises}/>}
            </div>
        )
    }
}

function mapStateToProps(state) {
    if (state.exercisesReducer.length > 0) {
        return {
            exercises: state.exercisesReducer
        }
    } else {
       return { exercises: [{description: ''}] }
    }
}

export default connect(mapStateToProps)(Exercise);