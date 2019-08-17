import React from 'react'
import './player-card.css'

const PlayerCard = props => {
    const { player } = props
    return (
        <div
            className="player-card"
        >
            <div
                className="player-card-image"
            >
                <img src={player.imgURL} alt={player.playerFullName} />
            </div>
            <div
                className="player-card-information"
            >
                <h5>{player.primaryPosition}</h5>
                <h2>{player.playerFullName}</h2>
                <h3>{player.score}</h3>
            </div>
            <div
                className="player-card-footer"
            >
            </div>
        </div>
    )
}

export default PlayerCard