import React, { Component } from 'react'
import App from '../App'
import Exercise from './Exercise'

class WorkoutForm extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            workouts: [],
        }

        this.createWorkout = this.createWorkout.bind(this);
    }

    createWorkout(workout) {
        return fetch('/workouts', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(workout)
        })
         .then(response => response.json())
         .then(workout => this.setState({
             workouts: this.state.workouts.concat(workout)
         }))
        .then(window.location.reload())
    }

    render() {
        return (
            <div>
                <form ref="create-workout" className="workout-form" onSubmit = {(event) => this.handleSubmit(event)}>
                <input type="text" 
                       placeholder="title"
                       onChange={event => this.handleTitleChange(event)}
                       value={this.props.title}

                 />
                </form>
            </div>
        )
    }
}