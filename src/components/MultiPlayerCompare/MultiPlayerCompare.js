import React, { Component } from 'react'
import PlayerCard from '../PlayerCard/PlayerCard'
import './multi-player-compare.css'

class MultiPlayerCompare extends Component {
    state = {
        playersToCompare: []
    }

    componentWillUnmount = () => {
        this.props.clearPlayersToCompare()
    }

    render() {
        // this.state.playersToCompare.sort( (a, b) => a.score < b.score ? 1 : -1 )
        let players = this.props.selectedPlayers.filter( player => this.props.playersToCompare.includes(player._id))
        return (
            <div className="multi-player-compare">
                {
                    players.map( player => {
                        return (
                            <div
                                key={player.playerFullName}
                            >
                                <PlayerCard
                                    key={player.playerFullName}
                                    player={player}
                                    handleSelectScoreInformation={this.props.handleSelectScoreInformation}
                                    addPlayerToCompare={ (player) => {
                                        console.log('the player is', player)
                                    }}
                                />
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default MultiPlayerCompare