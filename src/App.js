import React, { Component } from 'react';
import './App.css';
import Board from './Components/Board.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Suzette's fetch in React Experiment
          </h1>
        </header>
        <Board />
      </div>
    );
  }
}

export default App;
