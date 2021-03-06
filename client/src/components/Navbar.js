import React from 'react'; 
import { Container, Header, Segment, Button, Icon, Dimmer, Loader, Divider, Menu } from 'semantic-ui-react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Homepage from './Homepage'
import Workout from './Workout'
import WorkoutForm from './WorkoutForm'

const Navbar = () => {
    return (
        <Router>
            <div>
                <Header icon textAlign='center'>
                    <Icon.Group size='big'>
                        <Icon size='small' name='spinner' color='pink' />
                    </Icon.Group>
                </Header>
                
                <Menu>
                    <Menu.Item as={Link} to='/'> Home </Menu.Item>
                    <Menu.Item as={Link} to='/workouts'> Workouts </Menu.Item>
                    <Menu.Item as={Link} to='/workout-form'> Add Workout </Menu.Item>
                </Menu>
                
                <Route exact path="/" component={Homepage}/>
                <Route exact path="/workouts" component={Workout}/>
                <Route exact path="/workout-form" component={WorkoutForm}/>

            </div>
        </ Router >
    )}

export default Navbar;

// stateless component 

