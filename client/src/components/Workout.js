import React, { Component } from 'react'; 
import { Header, Label } from 'semantic-ui-react'
import { connect } from 'react-redux';
import Workouts from './Workouts';
import * as workoutActions from '../actions/workoutActions';
import { bindActionCreators } from 'redux';


class Workout extends Component {
    
    render () {

        return (
        <div>
            <Label size='big' color='pink'> 
                HIIT Workouts
            </Label>
            <p></p>
            {this.props.workouts && <Workouts workouts={this.props.workouts}/>}
        </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      workoutActions: bindActionCreators(workoutActions, dispatch)
    }
  };
}

function mapStateToProps(state) {
    if (state.workoutsReducer.length > 0) {
        return {
            workouts: state.workoutsReducer,
        }
    } else {
       return { workouts: [{title: '', duration: '', interval: '', rest: '', sets: '', cooldown: '', exercises: []}],
    }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Workout);