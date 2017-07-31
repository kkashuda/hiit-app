import React, { Component } from 'react'; 
import { Header, Label } from 'semantic-ui-react'
import { connect } from 'react-redux';
import Workouts from './Workouts';

class Workout extends Component {
    render () {
        const workouts = this.props.workouts;
        return (
        <div>
            <Label size='big' color='pink'>
                HIIT Workouts
            </Label>
            <p></p>
            {this.props.workouts && <Workouts workouts={workouts}/>}
        </div>
        )
    }
}

function mapStateToProps(state) {
    if (state.workoutsReducer.length > 0) {
        return {
            workouts: state.workoutsReducer
        }
    } else {
       return { workouts: [{title: '', duration: '', interval: '', rest: '', sets: ''}] }
    }
}

export default connect(mapStateToProps)(Workout);