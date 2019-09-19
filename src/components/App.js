import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import AllTimeStartingFive from './AllTimeStartingFive/AllTimeStartingFive'
import CriteriaForm from './CriteriaForm/CriteriaForm'
import PlayerBattle from './PlayerBattle/PlayerBattle'
import PlayerCards from './PlayerCards/PlayerCards'
import PlayerSearch from './PlayerSearch/PlayerSearch'
import PositionMenu from './PositionMenu/PositionMenu'
import ScoreInformationModal from './ScoreInformationModal/ScoreInformationModal'
import './App.css'

class App extends Component {
  state = {
    players: [],
    selectedPosition: 'All',
    selectedPlayers: [],
    selectedPlayer: null,
    allTimeStartingFive: [],
    criteria: {
      per: 1,
      championships: 1,
      ppg: 1,
      mvp: 1,
      allNBA: 1
    },
    scoreInformationModalVisible: false,
    playerOne: null,
    playerTwo: null,
    searchCriteria: '',
    playersToCompare: []
  }

  componentDidMount = () => {
    this.getInitialPlayers()
      .then( res => this.setState({
        selectedPlayers: res.data.players,
        players: res.data.players,
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
    const { criteria, searchCriteria } = this.state
    const response = await fetch('/api/v3/players/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        criteria,
        selectedPosition: newPosition,
        searchCriteria
      })
    })

    const body = await response.json()

    this.setState({
      selectedPlayers: body.players,
      selectedPosition: newPosition
    })
  }

  selectAllTimeStartingFive = async () => {
    const { criteria, searchCriteria } = this.state
    const response = await fetch('/api/v3/players/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        selectedPosition: 'all-time',
        criteria,
        searchCriteria
      })
    })
    const body = await response.json()
    const newPlayers = body.players

    if (response.status !== 200) {
      throw Error(body.message)
    }

    this.setState({
      selectedPlayers: newPlayers,
      selectedPosition: 'all-time'
    })
  }

  handleCriteriaFormSubmit = async newCriteria => {
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

    if (response.status !== 200) {
      throw Error(body.message)
    }

    this.setState({
      selectedPlayers: newPlayers,
      criteria: newCriteria
    })
  }

  handleSelectScoreInformation = selectedPlayer => {
    this.setState({
      selectedPlayer,
      scoreInformationModalVisible: !this.state.scoreInformationModalVisible
    })
  }

  handleCloseSelectScoreInformation = () => {
    this.setState({ scoreInformationModalVisible: !this.state.scoreInformationModalVisible })
  }

  handlePlayerInputSubmit = async (player, playerNumber) => {
    const response = await fetch('/api/v3/battle', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        newCriteria: this.state.criteria,
        player
      })
    })

    const body = await response.json()
    const selectedPlayer = await body.player
    console.log(selectedPlayer)

    if (playerNumber === 'First Player') {
      this.setState({ playerOne: selectedPlayer })
    } else if (playerNumber === 'Second Player') {
      this.setState({ playerTwo: selectedPlayer })
    }
  }

  handlePlayerSearchChange = async searchTerm => {
    const response = await fetch('/api/v3/search', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        newCriteria: this.state.criteria,
        searchTerm,
        selectedPosition: this.state.selectedPosition
      })
    })

    const body = await response.json()
    const searchResults = await body.searchResults
    console.log('search results are ', searchResults)

    this.setState({
      selectedPlayers: searchResults,
      searchCriteria: searchTerm,
      selectedPosition: this.state.selectedPosition
    })
  }

  addPlayerToCompare = (player) => {
    const { playersToCompare } = this.state
    if (playersToCompare.filter(p => p._id === player._id).length > 0) {
      let newPlayersToCompare = playersToCompare.filter( newPlayer => newPlayer._id !== player._id)
      this.setState({ playersToCompare: newPlayersToCompare })
    } else {
      this.setState({ playersToCompare: playersToCompare.concat(player) })
    }
  }

  render() {
    return (
      <Router>
        <div className="app">
          <div className="app-header">
            <div className="app-header-wrapper">
              <h1>All Time Starting 5</h1>
              <p>The best starting 5 of all time, according to you.</p>
              <CriteriaForm
                handleCriteriaFormSubmit={this.handleCriteriaFormSubmit}
              />
              <div className="navigation">
                <ul>
                  <li>
                    <Link to="/">All Time Starting Five</Link>
                  </li>
                  <li>
                    <Link to="/battle">Battle</Link>
                  </li>
                </ul>
              </div>
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
              <PlayerSearch
                handlePlayerSearchChange={this.handlePlayerSearchChange}
              />
            </div>
          </div>
          <Route
            path='/'
            exact={true}
            render={ (props) => <PlayerCards {...props}
                players={this.state.selectedPlayers}
                calculateScore={this.calculateScore}
                handleSelectScoreInformation={this.handleSelectScoreInformation}
                addPlayerToCompare={this.addPlayerToCompare}
              />
            }
          />
          <Route
            path='/battle'
            exact={true}
            render={ props => <PlayerBattle {...props}
                handleSubmit={this.handlePlayerInputSubmit}
                playerOne={this.state.playerOne}
                playerTwo={this.state.playerTwo}
              />
            }
          />
          <ScoreInformationModal
            visible={this.state.scoreInformationModalVisible}
            hideModal={this.handleCloseSelectScoreInformation}
            selectedPlayer={this.state.selectedPlayer}
          />
        </div>
      </Router>
    )
  }
}

export default App;