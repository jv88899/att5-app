import React from 'react'
import './player-card.css'

const PlayerCard = props => {
    const { player } = props
    return (
        <div
            className="player-card"
        >
            <h3>{player.primaryPosition}</h3>
            <img src={player.imgURL} alt={player.playerFullName} />
            <h2>{player.playerFullName}</h2>
            <p>Total Score: {player.careerPER}</p>
        </div>
    )
}

export default PlayerCard