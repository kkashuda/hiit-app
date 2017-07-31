import React, { Component } from 'react';
import Workout from './Workout';

class Workouts extends Component {
    constructor(props) {
        super(props)
        debugger

    }

    render() {
        return (
            <div>
                {this.props.workouts.map((workout, index) => 
                    <div key={workout.id}>
                        <p> {workout.title} </p>
                        <p> {workout.interval} </p>
                        <p> {workout.duration} </p>
                        <p> {workout.sets} </p>
                    </div>
                 )}
            </div>
        )
    }
}

export default Workouts;