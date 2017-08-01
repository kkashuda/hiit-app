import React, { Component } from 'react'
import App from '../App'
import Workout from './Workout'


class WorkoutForm extends Component {
    constructor(props) {
        super(props);
   
        this.state = {
                workouts: [] 
        }

        this.createWorkout = this.createWorkout.bind(this);
    }

    createWorkout(workout) {
        debugger
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

    handleIntervalChange(event) {
        this.setState({
            interval: event.target.value
        }) 
    }

    handleSubmit(event) {
        this.createWorkout(this.state)
        this.refs.workoutForm.reset()
        event.preventDefault()


    }

    render() {
        return (
            <div>
                <form ref="workoutForm" className="workout-form" onSubmit = {(event) => this.handleSubmit(event)}>
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

                <input type="text" 
                       placeholder="interval"
                       onChange={event => this.handleIntervalChange(event)}
                       value={this.props.cooldown}
                 />

                 <input type="submit"
                        value="create workout"
                />
                </form>
            </div>
        )
    }
}

export default WorkoutForm; 