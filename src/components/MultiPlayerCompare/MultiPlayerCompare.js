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
        this.state.playersToCompare.sort( (a, b) => a.score < b.score ? 1 : -1 )
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
                                        return null
                                    }}
                                    removePlayerToCompare={ (player) => {
                                        return null
                                    }}
                                    playerCardIsClickable={false}
                                />
                            </div>
                        )
                    })
                }
                <div>
                {console.log(this.props.playersToCompare.length)}
                    {
                        // console.log(this.props.playersToCompare)
                        this.props.playersToCompare.length <= 0 &&
                        <p>Choose 2 or more players to compare</p>
                    }
                </div>
            </div>
        )
    }
}

export default MultiPlayerCompare