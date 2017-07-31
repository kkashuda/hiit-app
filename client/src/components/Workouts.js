import React, { Component } from 'react';
import Workout from './Workout';
import { Container, Header, Segment, Button, Icon, Dimmer, Loader, Divider } from 'semantic-ui-react'

class Workouts extends Component {
    constructor(props) {
        super(props)
    }

    render() { 
        return (
            <div>
                {this.props.workouts.map((workout, index) => 
                    <div key={workout.id}>
                        <Header as='h2'> {workout.title} </Header>
                        <p> Total duration: {workout.duration} minutes </p>
                        <p></p>
                        <p> Do each workout for {workout.interval} seconds</p>
                        <p> Complete the circuit {workout.sets} x </p>
                        <p> After each set rest for {workout.rest} minute(s) </p>
                    </div>
                 )}
            </div>
        )
    }
}

export default Workouts;