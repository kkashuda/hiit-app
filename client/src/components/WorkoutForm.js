import React, { Component } from 'react'
import App from '../App'
import Workout from './Workout'
import { Container, Header, Segment, Button, Icon, Dimmer, Loader, Divider, Form, Input, TextArea} from 'semantic-ui-react'
import WorkoutApi from './WorkoutApi'

class WorkoutForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            workouts: []
        }
    }

    handleTitleChange(event) {
        this.setState({
            title: event.target.value
        })
    }

    handleDurationChange(event) {
        this.setState({
            duration: event.target.value
        })
    }

    handleSetsChange(event) {
        this.setState({
            sets: event.target.value
        })
    }

    handleCooldownChange(event) {
      this.setState({
            cooldown: event.target.value
        })
    }

    handleRestChange(event) {
        this.setState({
            rest: event.target.value
        })
    }

    handleIntervalChange(event) {
        this.setState({
            interval: event.target.value
        }) 
    }

    handleExerciseChange(event) {
        this.setState({
            exercises: event.target.value
        })
    }


    handleWorkoutSubmit(event) {
        var workout = WorkoutApi.createWorkout(this.state)
        this.refs.workoutForm.reset()
        event.preventDefault()

    }



    render() {
        return (
            <Container>
                   <Segment color='pink'>

                <Form ref="workoutForm" className="workout-form" onSubmit = {(event) => this.handleWorkoutSubmit(event)}>
                <Header as='h4' color='black' textAlign='left'>Title</Header>
                <Form.Field control={Input} type="text" width={2}
                       placeholder="title"
                       onChange={event => this.handleTitleChange(event)}
                       value={this.props.title}
                 />
                   <Header as='h4' color='black' textAlign='left'>Total duration</Header>
                  <Form.Field control={Input} type="text" width={2}
                       placeholder="duration"
                       onChange={event => this.handleDurationChange(event)}
                       value={this.props.duration}
                 />
                
                <Header as='h4' color='black' textAlign='left'>Number of sets</Header>
                  <Form.Field control={Input} type="text" width={2}
                       placeholder="sets"
                       onChange={event => this.handleSetsChange(event)}
                       value={this.props.sets}
                 />

                <Header as='h4' color='black' textAlign='left'>How many seconds of rest between each exercise?</Header>
                  <Form.Field control={Input} type="text" width={2}
                       placeholder="rest"
                       onChange={event => this.handleRestChange(event)}
                       value={this.props.rest}
                 />

                <Header as='h4' color='black' textAlign='left'>How many minutes of rest after completing each set?</Header>

                  <Form.Field control={Input} type="text" width={2}
                       placeholder="cooldown"
                       onChange={event => this.handleCooldownChange(event)}
                       value={this.props.cooldown}
                 />

                <Header as='h4' color='black' textAlign='left'>The duration (in seconds) of each exercise</Header>
                <Form.Field control={Input} type="text" width={2}
                       placeholder="interval"
                       onChange={event => this.handleIntervalChange(event)}
                       value={this.props.interval}
                 />

                <Header as='h4' color='black' textAlign='left'>List the exercises, seperating each exercise by a comma</Header>
                <Form.Field control={TextArea} type="text" width={4}
                        placeholder="exercises"
                        onChange={event => this.handleExerciseChange(event)}
                        value={this.props.exercises}
                 />


                 <Form.Field control={Button} type="submit"
                        content='Submit'
                />
                </ Form>
                </Segment>
     

            </Container>
        )
    }
}

export default WorkoutForm; 