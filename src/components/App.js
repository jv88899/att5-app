import React, { Component } from 'react'
import Header from './Header/Header'
import PlayerCards from './PlayerCards/PlayerCards'
import './App.css'

class App extends Component {
    state = {
        criteria: {
            per: 1,
            championships: 1,
            ppg: 1,
            mvp: 1,
            allNBA: 1
        },
        selectedPlayers: [],
        selectedPosition: 'All',
        searchCriteria: ''
    }

    componentDidMount = () => {
        this.getInitialPlayers()
            .then(res => this.setState({
                selectedPlayers: res.data.players
            }))
            .catch(err => console.log(err))
    }

    getInitialPlayers = async () => {
        const response = await fetch('/api/v3/players/All')
        const body = await response.json()

        if (response.status !== 200) {
            throw Error(body.message)
        }

        return body
    }

    handleCriteriaFormSubmit = async newCriteria => {
        const { selectedPosition, searchCriteria } = this.state
        const response = await fetch('/api/v3/players', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            criteria: newCriteria,
            selectedPosition: selectedPosition,
            searchCriteria: searchCriteria
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

    render() {
        const {
            selectedPlayers
        } = this.state
        return (
            <div>
                <Header
                    currentCriteria={this.state.criteria}
                    handleCriteriaFormSubmit={this.handleCriteriaFormSubmit}
                />
                <PlayerCards
                    players={selectedPlayers}
                />
            </div>
        )
    }
}

export default App