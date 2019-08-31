import React, { Component } from 'react'
import PlayerInput from '../PlayerInput/PlayerInput'
import './player-battle.css'

class PlayerBattle extends Component {
    state = {
        playerOne: null,
        playerTwo: null,
    }

    handleClick = () => {
        alert('working')
    }

    render() {
        let winner = null
        if (this.props.playerOne !== null && this.props.playerTwo !== null) {
            if (this.props.playerOne.score > this.props.playerTwo.score) {
                winner = this.props.playerOne.playerFullName
            } else if (this.props.playerOne.score < this.props.playerTwo.score) {
                winner = this.props.playerTwo.playerFullName
            }
        }
        return (
            <div>
                From the player battle component
                <div className="player-battle-container">
                <PlayerInput
                    handleSubmit={this.props.handleSubmit}
                    label="First Player"
                    playerOne={this.props.playerOne}
                />
                <PlayerInput
                    handleSubmit={this.props.handleSubmit}
                    label="Second Player"
                    playerTwo={this.props.playerTwo}
                />
                {
                    (this.props.playerOne === null || this.props.playerTwo === null) && winner === null
                        ? null
                        : <p>The winner is {winner}</p>
                }
                </div>
                {
                    this.props.playerOne === null || this.props.playerTwo === null
                        ? null
                        : <button onClick={this.handleClick}>Compare</button>
                }
            </div>
        )
    }
}

export default PlayerBattle