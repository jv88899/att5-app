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
    const response = await fetch(`/api/v3/players/${newPosition}`)
    const body = await response.json()

    if (response.status !== 200) {
      throw Error(body.message)
    }

    this.setState({
      selectedPlayers: body.data.players,
      selectedPosition: newPosition
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
      selectedPlayers: allTimeStartingFive,
      selectedPosition: 'all-time'
    })
  }

  calculateScore = player => {
    const { per, championships, ppg, mvp, allNBA } = this.state.criteria
    let tier1 = ( (0.5 * player.reboundsPerGame) + (0.5 * player.stealsPerGame) + (0.5 * player.blocksPerGame) )
    let tier2 = ( (ppg * player.pointsPerGame) + (1.0 * player.assistsPerGame) + (1.0 * player.allNBAThird) )
    let tier3 = ( (per * player.careerPER) + (1.5 * player.allNBASecond) )
    let tier4 = ( (championships * player.championships) + (allNBA * player.allNBAFirst) + (mvp * player.mvp) + (2.0 * player.dpoy) )
    let tier5 = ( (2.5 * player.finalsMVP) )
    let totalScore = tier1 + tier2 + tier3 + tier4 + tier5

    return totalScore
  }

  handleCriteriaFormSubmit = async newCritera => {
    const response = await fetch('/api/v3/players', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newCritera)
    })
    const body = await response.json()
    const newPlayers = body.data.players
    console.log('body', body)

    if (response.status !== 200) {
      throw Error(body.message)
    }

    this.setState({
      selectedPlayers: newPlayers
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