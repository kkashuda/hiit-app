import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import WorkoutList from './WorkoutList';
import { Container, Header, Segment, Button, Icon, Dimmer, Loader, Divider, Label} from 'semantic-ui-react'

class Workout extends Component {  
    render() {
        return (
            <Container>
                {this.props.workouts && <WorkoutList workouts={this.props.workouts}/>}
            </Container>
        )
    }
}

function mapStateToProps(state) {
    debugger
    if (state.workoutsReducer.length > 0) {
        return {
            workouts: state.workoutsReducer,
        }
    } else {
       return { workouts: [{title: '', duration: '', interval: '', rest: '', sets: '', cooldown: '', exercises: []}],
    }
    }
}

export default connect(mapStateToProps)(Workout);