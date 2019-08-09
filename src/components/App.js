import React, { Component } from 'react'
import AllTimeStartingFive from './AllTimeStartingFive/AllTimeStartingFive'
import CriteriaForm from './CriteriaForm/CriteriaForm'
import PlayerCards from './PlayerCards/PlayerCards'
import PositionMenu from './PositionMenu/PositionMenu'
import './App.css'

class App extends Component {
  state = {
    players: [],
    selectedPosition: 'All',
    selectedPlayers: [],
    allTimeStartingFive: [],
    criteria: {
      per: 1,
      championships: 1,
      ppg: 1,
      mvp: 1,
      allNBA: 1
    }
  }

  componentDidMount = () => {
    this.getInitialPlayers()
      .then( res => this.setState({
        selectedPlayers: res.data.players,
        players: res.data.players
      }))
      .catch( err => console.log(err))
  }

  getInitialPlayers = async () => {
    const response = await fetch('/api/v3/players/All')
    const body = await response.json()

    if (response.status !== 200) {
      throw Error(body.message)
    }

    return body
  }

  selectNewPosition = async newPosition => {
    const { criteria } = this.state
    const response = await fetch('/api/v3/players/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        criteria,
        selectedPosition: newPosition
      })
    })

    const body = await response.json()

    this.setState({
      selectedPlayers: body.players,
      selectedPosition: newPosition
    })
  }

  selectAllTimeStartingFive = async () => {
    let response = await fetch('/api/v3/players/all-time')
    const body = await response.json()

    if (response.status !== 200) {
      throw Error(body.message)
    }

    this.setState({
      selectedPlayers: body.data.players,
      selectedPosition: 'all-time'
    })

  }

  handleCriteriaFormSubmit = async newCriteria => {
    console.log('at this ponit', newCriteria)
    const response = await fetch('/api/v3/players', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        criteria: newCriteria,
        selectedPosition: this.state.selectedPosition
      })
    })
    const body = await response.json()
    const newPlayers = body.players
    console.log('body', body)

    if (response.status !== 200) {
      throw Error(body.message)
    }

    this.setState({
      selectedPlayers: newPlayers,
      criteria: newCriteria
    })
  }

  render() {
    return (
      <div className="app">
        <div className="app-header">
          <div className="app-header-wrapper">
            <h1>All Time Starting 5</h1>
            <p>The best starting 5 of all time, according to you.</p>
            <CriteriaForm
              handleCriteriaFormSubmit={this.handleCriteriaFormSubmit}
            />
            <div className="app-menu-container">
              <PositionMenu
                selectNewPosition={this.selectNewPosition}
                currentPosition={this.state.selectedPosition}
              />
              <AllTimeStartingFive
                currentPosition={this.state.selectedPosition}
                selectAllTimeStartingFive={this.selectAllTimeStartingFive}
              />
            </div>

          </div>
        </div>
        <PlayerCards
          players={this.state.selectedPlayers}
          calculateScore={this.calculateScore}
        />
      </div>
    )
  }
}

export default App;