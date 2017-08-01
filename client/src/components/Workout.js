import React, { Component } from 'react'; 
import { Header, Label } from 'semantic-ui-react'
import { connect } from 'react-redux';
import Workouts from './Workouts';
import * as exerciseActions from '../actions/exerciseActions';
import * as workoutActions from '../actions/workoutActions';
import { bindActionCreators } from 'redux';


class Workout extends Component {
    
    render () {
        debugger
        return (
        <div>
            <Label size='big' color='pink'> 
                HIIT Workouts
            </Label>
            <p></p>
            {this.props.workouts && this.props.exercises && <Workouts workouts={this.props.workouts} exercises={this.props.exercises}/>}
        </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      exerciseActions: bindActionCreators(exerciseActions, dispatch),
      workoutActions: bindActionCreators(workoutActions, dispatch)
    }
  };
}

function mapStateToProps(state) {
    debugger
    if (state.workoutsReducer.length > 0 && state.exercisesReducer.length > 0) {
        return {
            workouts: state.workoutsReducer,
            exercises: state.exercisesReducer

        }
    } else {
       return { workouts: [{title: '', duration: '', interval: '', rest: '', sets: ''}],
                exercises: [{description: ''}]
    }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Workout);