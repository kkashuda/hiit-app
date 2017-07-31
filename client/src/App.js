import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import { Container, Header, Segment, Button, Icon, Dimmer, Loader, Divider } from 'semantic-ui-react'

class App extends Component {
  componentDidMount() {
    window.fetch('/workouts')
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => console.log(error))
  }
  render() {
    return (
      <div className="App">
        <Navbar />
      </div>
    );
  }
}

export default App;
