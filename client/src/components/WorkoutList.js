import React, { Component } from 'react';
import Workout from './Workout';
import { Container, Header, Segment, Button, Icon, Dimmer, Loader, Divider, Label} from 'semantic-ui-react'
import store from '../index'

const WorkoutList = props => (
    <div>
          <Label size='big' color='pink'> 
                HIIT Workouts
          </Label>
          <p></p>

        {props.workouts.map((workout, index) => 
        <Container>
            <Segment color="pink">
                <div key={workout.id}>
                    <Header as='h2'> {workout.title} </Header>
                    <p> Total duration: {workout.duration} minutes </p>
                    <p></p>
                    <p> Do each workout for {workout.interval} seconds</p>
                    <p> After each workout rest for {workout.interval} seconds</p>

                    <p> Complete the circuit {workout.sets} x </p>
                    <p> After each set rest for {workout.rest} minute(s) </p>    
                </div>
                    
                <br></br> <Header as='h3'> Exercises:</Header>
                <div>
                    {workout.exercises.split(",").map((exercise, index) => 
                        <div key={exercise.id}>
                             <p> {exercise} </p>
                        </div>
                    )}
                </div>
                <br></br>
            </Segment>
        </Container>
            )
        }
        </div>
    )


    WorkoutList.defaultProps = {
        workouts: []
    }
    

export default WorkoutList;

// stateless component 