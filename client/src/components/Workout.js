import React from 'react'
import { Header } from 'semantic-ui-react'
import { connect } from 'react-redux';
import Workouts from './Workouts';

const Workout = () => {
    debugger
    const workouts = this.props.workouts;
    return (
        <div>
            <Header as='h3' block>
                HIIT WORKOUTS:
            </Header>
        </div>
    )
}

function mapStateToProps(state) {
    if (state.workoutsReducer.length > 0) {
        return {
            workouts: state.workoutsReducer
        }
    } else {
        workouts: [{title: '', duration: '', interval: '', rest: '', sets: ''}]
    }
}

export default connect(mapStateToProps)(Workout);