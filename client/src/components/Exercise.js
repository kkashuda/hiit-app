import React, { Component } from 'react'; 
import { Header, Label } from 'semantic-ui-react'
import { connect } from 'react-redux';
import Exercises from './Exercises';

class Exercise extends Component {
    render () {
        return (
            <div>
                {this.props.exercises && <Exercises exercises={exercises}/>}
            </div>
        )
    }
}

function mapStateToProps(state) {
    if (state.exercisesReducer.length > 0) {
        return {
            exercises: state.exercisesReducer
        }
    } else {
       return { exercises: [{description: ''}] }
    }
}

export default connect(mapStateToProps)(Exercise);