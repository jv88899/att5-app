import React from 'react'
import PlayerCard from '../PlayerCard/PlayerCard'
import './player-cards.css'

const PlayerCards = props => {
    const { players, calculateScore } = props
    return (
        <div className="player-cards">
            {
                players.map( player => {
                    return (
                        <PlayerCard
                            key={player.playerFullName}
                            player={player}
                            calculateScore={calculateScore}
                        />
                    )
                })
            }
        </div>
    )
}

export default PlayerCards