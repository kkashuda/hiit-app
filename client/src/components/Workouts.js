import React, { Component } from 'react';
import Workout from './Workout';
import { Container, Header, Segment, Button, Icon, Dimmer, Loader, Divider } from 'semantic-ui-react'
import Exercise from './Exercise'

class Workouts extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        debugger 
        return (
            <div>
                {this.props.workouts.map((workout, index) => 
                <div>
                    <div key={workout.id}>
                        <Header as='h2'> {workout.title} </Header>
                        <p> Total duration: {workout.duration} minutes </p>
                        <p></p>
                        <p> Do each workout for {workout.interval} seconds</p>
                        <p> After each exercise rest for {workout.cooldown} seconds</p>

                        <p> Complete the circuit {workout.sets} x </p>
                        <p> After each set rest for {workout.rest} minute(s) </p>
                       
                    </div>
                    <br></br> <Header as='h3'> Exercises:</Header>
                    <div>
                        { this.props.exercises.map((exercise, index) => 
                        <div key={exercise.id}>
                            {exercise.workout_id === workout.id ? <p> {exercise.description} </p> : null} 
                        </div>
                    )}
                    </div>
                      <br></br>
                    </div>
                  
                 )}

    
            </div>
        )
    }
}

export default Workouts;