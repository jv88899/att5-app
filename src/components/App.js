import React, { Component } from 'react'
import PositionMenu from './PositionMenu/PositionMenu'
import PlayerCards from './PlayerCards/PlayerCards'
import './App.css'

class App extends Component {
  state = {
    players: [
      {
        playerfirstName: 'LeBron',
        playerLastName: 'James',
        playerFullName: 'LeBron James',
        position: ['SF', 'PF'],
        primaryPosition: 'SF',
        secondaryPosition: 'PF',
        pointsPerGame: 30.2,
        reboundsPerGame: 8.4,
        assistsPerGame: 10.2,
        stealsPerGame: 2.2,
        blocksPerGame: 1.6,
        careerPER: 33,
      },
      {
        playerfirstName: 'Michael',
        playerLastName: 'Jordan',
        playerFullName: 'Michael Jordan',
        position: 'SG',
        primaryPosition: 'SG',
        pointsPerGame: 34.2,
        reboundsPerGame: 6.4,
        assistsPerGame: 5.2,
        stealsPerGame: 2.8,
        blocksPerGame: 1.2,
        careerPER: 32
      },
      {
        playerfirstName: 'Kevin',
        playerLastName: 'Durant',
        playerFullName: 'Kevin Durant',
        position: ['PF', 'SF'],
        primaryPosition: 'SF',
        secondaryPosition: 'PF',
        pointsPerGame: 31.2,
        reboundsPerGame: 9.4,
        assistsPerGame: 6.2,
        stealsPerGame: 2.1,
        blocksPerGame: 2.1,
        careerPER: 31
      },
    ],
    selectedPosition: 'All',
    selectedPlayers: []
  }

  componentDidMount = () => {
    console.log('component mounted')
    let selectedPlayers = []
    if (this.state.selectedPosition === 'All') {
      this.state.players.map( player => {
        selectedPlayers.push(player)
        return selectedPlayers
      })

      this.setState({ selectedPlayers })
    }
  }

  selectNewPosition = newPosition => {
    let selectedPlayers = this.state.players
    selectedPlayers = selectedPlayers.filter( player => newPosition === 'All' || player.primaryPosition === newPosition || player.secondaryPosition === newPosition )
    this.setState({ selectedPlayers })
  }

  render() {
    return (
      <div className="app">
        <h1>All Time Top 5</h1>
        <p>The best starting 5 of all time, according to you.</p>
        <PositionMenu
          selectNewPosition={this.selectNewPosition}
        />
        <PlayerCards
          players={this.state.selectedPlayers}
          selectedPosition={this.state.selectedPosition}
        />
      </div>
    )
  }
}

export default App;
