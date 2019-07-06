import React from 'react'
import PlayerCard from '../PlayerCard/PlayerCard'

const PlayerCards = props => {
    const { players } = props
    return (
        <div className="player-cards">
            {
                players.map( player => {
                    return (
                        <PlayerCard
                            key={player.playerFullName}
                            player={player}
                        />
                    )
                })
            }
        </div>
    )
}

export default PlayerCards