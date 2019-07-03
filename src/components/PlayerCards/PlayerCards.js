import React from 'react'

const PlayerCards = props => {
    const { players } = props
    
    return (
        <div className="player-cards">
            {
                players.map( player => {
                    return (
                        <div
                            key={player.playerFullName}
                        >
                            <span>{player.playerFullName}</span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PlayerCards