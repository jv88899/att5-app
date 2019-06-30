import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    stats: [
      {
        playerfirstName: 'LeBron',
        playerLastName: 'James',
        playerFullName: 'LeBron James',
        position: ['SF', 'PF'],
        pointsPerGame: 30.2,
        reboundsPerGame: 8.4,
        assistsPerGame: 10.2,
        stealsPerGame: 2.2,
        blocksPerGame: 1.6
      },
      {
        playerfirstName: 'Michael',
        playerLastName: 'Jordan',
        playerFullName: 'Michael Jordan',
        position: 'SG',
        pointsPerGame: 34.2,
        reboundsPerGame: 6.4,
        assistsPerGame: 5.2,
        stealsPerGame: 2.8,
        blocksPerGame: 1.2
      },      {
        playerfirstName: 'Kevin',
        playerLastName: 'Durant',
        playerFullName: 'Kevin Durant',
        position: ['PF', 'SF'],
        pointsPerGame: 31.2,
        reboundsPerGame: 9.4,
        assistsPerGame: 6.2,
        stealsPerGame: 2.1,
        blocksPerGame: 2.1
      },
    ]
  }

  render() {
    return (
      <div className="app">
        <h1>All Time Top 5</h1>
        <p>The best starting 5 of all time, according to you.</p>
      </div>
    )
  }
}

export default App;
