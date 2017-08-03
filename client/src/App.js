import React, { Component } from 'react';
import logo from './logo.svg';
import { render } from 'react-dom';
import './App.css';
import Navbar from './components/Navbar'
import { Container, Header, Segment, Button, Icon, Dimmer, Loader, Divider } from 'semantic-ui-react'

const App = () => (
      <div className="App">
        <Navbar />
      </div>
)

render (<App />, document.getElementById('root'))

export default App;
