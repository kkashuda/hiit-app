import React, { Component } from 'react';
import WorkoutForm from './WorkoutForm';

class WorkoutFormContainer extends React.Component {
    state = {
        workouts: []
    }
    
    render () {
        return <WorkoutForm />
    }

}