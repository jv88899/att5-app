import React from 'react'
import PlayerCard from '../PlayerCard/PlayerCard'
import './player-cards.css'

const PlayerCards = props => {
    const { players } = props
    
    return (
        <div className="player-cards">
            <PlayerCard
                players={players}
            />
        </div>
    )
}

export default PlayerCards