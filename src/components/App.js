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
      per: 0,
      championships: 0,
      ppg: 0,
      mvp: 0,
      allNBA: 0
    }
  }

  componentDidMount = () => {
    this.getInitialPlayers()
      .then(res => this.setState({
        selectedPlayers: res.data.players,
        players: res.data.players
      }))
      .then( () => {
        this.selectNewPosition('All')
      })
      .then( () => {
        const newPlayers = this.state.players.sort( (a, b) => (this.calculateScore(a) < this.calculateScore(b) ? 1 : -1) )
        this.setState({
          selectedPlayers: newPlayers
        })
        console.log(this.state.criteria)
      })
      .catch(err => console.log(err))
  }

  getInitialPlayers = async () => {
    const response = await fetch('/api/v1/players')
    const body = await response.json()

    if (response.status !== 200) {
      throw Error(body.message)
    }

    return body
  }

  selectNewPosition = newPosition => {
    const { players } = this.state
    const newSelectedPlayers = players.filter( player => newPosition === 'All' || player.primaryPosition === newPosition )
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
      selectedPlayers: allTimeStartingFive,
      selectedPosition: 'all-time'
    })
  }

  calculateScore = player => {
    const { per, championships, ppg, mvp, allNBA } = this.state.criteria
    let tier1 = ( (0.5 * player.reboundsPerGame) + (0.5 * player.stealsPerGame) + (0.5 * player.blocksPerGame) )
    let tier2 = ( ((1 + (ppg * 0.1)) * player.pointsPerGame) + (1.0 * player.assistsPerGame) + (1.0 * player.allNBAThird) )
    let tier3 = ( ((1.5 + (per * 0.1)) * player.careerPER) + (1.5 * player.allNBASecond) )
    let tier4 = ( ((2 + (championships * .1)) * player.championships) + ((2.0 + (allNBA * 0.1)) * player.allNBAFirst) + ((2.0 + (mvp * 0.1)) * player.mvp) + (2.0 * player.dpoy) )
    let tier5 = ( (2.5 * player.finalsMVP) )
    let totalScore = tier1 + tier2 + tier3 + tier4 + tier5

    return totalScore
  }

  handleCriteriaFormSubmit = (newCritera) => {
    console.log(`new criteria`, newCritera)
    this.setState({ criteria: newCritera }, () => {
      console.log(`criteria is now`, this.state.criteria)
    })
  }

  render() {
    return (
      <div className="app">
        <div className="app-header">
          <div className="app-header-wrapper">
            <h1>All Time Top 5</h1>
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