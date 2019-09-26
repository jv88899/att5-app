import React, { Component } from 'react'
import PlayerCard from '../PlayerCard/PlayerCard'
import './player-input.css'

class PlayerInput extends Component {
    state = {
      playerName: ''
    }
  
    handleSubmit = e => {
      e.preventDefault()
  
      this.props.handleSubmit(this.state.playerName, this.props.label)
    }
  
    handleChange = e => {
      this.setState({ playerName: e.target.value })
    }
  
    render() {
      return (
        <div className="player-input-container">
        { this.props.playerOne === null || this.props.playerTwo === null ? 
        <form
          className="column player"
          onSubmit={this.handleSubmit}
        >
          <label htmlFor="username" className="player-label">
            {this.props.label}
          </label>
          <div className="row player-inputs">
            <input
              type="text"
              id="player-name"
              className="input-light"
              placeholder="player-name"
              autoComplete="off"
              value={this.state.playerName}
              onChange={this.handleChange}
            />
            <button
              className="btn dark-btn"
              type="submit"
              disabled={!this.state.playerName}
            >
              Submit
            </button>
          </div>
        </form> :
        <PlayerCard
          player={this.props.label === 'First Player' ? this.props.playerOne : this.props.playerTwo}
        />
        }
        </div>
      )
    }
  }

export default PlayerInput