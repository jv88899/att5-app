import React, { Component } from 'react'
import PlayerCard from '../PlayerCard/PlayerCard'
import './player-cards.css'

class PlayerCards extends Component {
    
    render() {
        // const { players, handleSelectScoreInformation, addPlayerToCompare } = this.props
        const {
            players,
            handleSelectScoreInformation,
            addPlayerToCompare,
            removePlayerToCompare
        } = this.props
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
                                    handleSelectScoreInformation={handleSelectScoreInformation}
                                    addPlayerToCompare={addPlayerToCompare}
                                    removePlayerToCompare={removePlayerToCompare}
                                    playerCardIsClickable={true}
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