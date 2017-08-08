import React, { Component } from 'react';
import logo from './logo.svg';
import { render } from 'react-dom';
import './App.css';
import Navbar from './components/Navbar'

const App = () => (
      <div className="App">
          <Navbar />
      </div>
)

render (<App />, document.getElementById('root'))

 

export default App;
