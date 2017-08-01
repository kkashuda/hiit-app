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

    render() {
        return (
            <div>
                <form ref="create-workout" className="workout-form" onSubmit = {(event) => this.handleSubmit(event)}>
                <input type="text" 
                       placeholder="title"
                       onChange={event => this.handleTitleChange(event)}
                       value={this.props.title}
                 />
                  <input type="text" 
                       placeholder="duration"
                       onChange={event => this.handleDurationChange(event)}
                       value={this.props.duration}
                 />
                  <input type="text" 
                       placeholder="sets"
                       onChange={event => this.handleSetsChange(event)}
                       value={this.props.sets}
                 />
                  <input type="text" 
                       placeholder="rest"
                       onChange={event => this.handleRestChange(event)}
                       value={this.props.rest}
                 />
                  <input type="text" 
                       placeholder="cooldown"
                       onChange={event => this.handleCooldownChange(event)}
                       value={this.props.cooldown}
                 />
                </form>
            </div>
        )
    }
}

export default WorkoutForm; 