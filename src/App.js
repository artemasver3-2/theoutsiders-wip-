import React from 'react';
import './App.css';
import Home from './home';
import AlexDrake from './alexdrake';
import { Routes, Route } from 'react-router-dom'

class App extends React.Component {
  constructor () {
    super() 
    this.state = {
     
    };
  }
  render () {
    return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/alexDrake" element={<AlexDrake />}/>
      </Routes>
    </div>
  )};
}

export default App;
