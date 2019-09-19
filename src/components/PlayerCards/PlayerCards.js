import React, { Component } from 'react'
import PlayerCard from '../PlayerCard/PlayerCard'
import './player-cards.css'

class PlayerCards extends Component {
    
    render() {
        const { players, calculateScore, handleSelectScoreInformation, addPlayerToCompare } = this.props
        return(
            <div className="player-cards">
                {
                    players.map( player => {
                        return (
                            <div
                                key={player.playerFullName}
                            >
                                <PlayerCard
                                    key={player.playerFullName}
                                    player={player}
                                    calculateScore={calculateScore}
                                    handleSelectScoreInformation={handleSelectScoreInformation}
                                    addPlayerToCompare={addPlayerToCompare}
                                />
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default PlayerCards