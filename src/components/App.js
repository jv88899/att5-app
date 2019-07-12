import React, { Component } from 'react'
import PositionMenu from './PositionMenu/PositionMenu'
import PlayerCards from './PlayerCards/PlayerCards'
import AllTimeStartingFive from './AllTimeStartingFive/AllTimeStartingFive'
import './App.css'

class App extends Component {
  state = {
    players: [],
    selectedPosition: 'All',
    selectedPlayers: [],
    allTimeStartingFive: []
  }

  componentDidMount = () => {
    this.getInitialPlayers()
      .then(res => this.setState({
        selectedPlayers: res.players,
        players: res.players
      }) )
      .catch(err => console.log(err))
  }

  getInitialPlayers = async () => {
    const response = await fetch('/express_backend')
    const body = await response.json()

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body
  }

  selectNewPosition = newPosition => {
    const { players } = this.state
    const newSelectedPlayers = players.filter( player => newPosition === 'All' || player.primaryPosition === newPosition || player.secondaryPosition === newPosition )
      .sort( (a, b) => (a.careerPER < b.careerPER) ? 1 : -1)
    this.setState({
      selectedPosition: newPosition,
      selectedPlayers: newSelectedPlayers
    })
  }

  selectAllTimeStartingFive = () => {
    const { players } = this.state
    let allTimeStartingFive = []
    let pgPER = 0
    let sgPER = 0
    let sfPER = 0
    let pfPER = 0
    let cPER = 0
    let topPG = ''
    let topSG = ''
    let topSF = ''
    let topPF = ''
    let topC = ''

    for (let i = 0; i < players.length; i++) {
      if (players[i].primaryPosition === 'PG') {
        if (players[i].careerPER > pgPER) {
          pgPER = players[i].careerPER
          topPG = players[i]
        }
      } else if (players[i].primaryPosition === 'SG') {
        if (players[i].careerPER > sgPER) {
          sgPER = players[i].careerPER
          topSG = players[i]
        }
      } else if (players[i].primaryPosition === 'SF') {
        if (players[i].careerPER > sfPER) {
          sfPER = players[i].careerPER
          topSF = players[i]
        }
      } else if (players[i].primaryPosition === 'PF') {
        if (players[i].careerPER > pfPER) {
          pfPER = players[i].careerPER
          topPF = players[i]
        }
      } else if (players[i].primaryPosition === 'C') {
        if (players[i].careerPER > cPER) {
          cPER = players[i].careerPER
          topC = players[i]
        }
      }
    }

    allTimeStartingFive.push(topPG)
    allTimeStartingFive.push(topSG)
    allTimeStartingFive.push(topSF)
    allTimeStartingFive.push(topPF)
    allTimeStartingFive.push(topC)

    this.setState({
      selectedPlayers: allTimeStartingFive
    })
  }

  render() {
    return (
      <div className="app">
        <h1>All Time Top 5</h1>
        <p>The best starting 5 of all time, according to you.</p>
        <PositionMenu
          selectNewPosition={this.selectNewPosition}
          currentPosition={this.state.selectedPosition}
        />
        <AllTimeStartingFive
          selectAllTimeStartingFive={this.selectAllTimeStartingFive}
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
