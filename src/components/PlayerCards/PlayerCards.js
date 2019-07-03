import React from 'react'

const PlayerCards = props => {
    const { players, selectedPosition } = props
    return (
        <div className="player-cards">
            {
                players.map( player => {
                    if (selectedPosition === 'All') {
                        return (
                            <div
                                key={player.playerFullName}
                            >
                                <span>{player.playerFullName}</span>
                                <span>{player.primaryPostion}</span>
                            </div>
                        )
                    } else if (player.primaryPosition === selectedPosition || player.secondaryPosition === selectedPosition ) {
                        return (
                            <div
                                key={player.playerFullName}
                            >
                                <span>{player.playerFullName}</span>
                                <span>{player.primaryPosition}</span>
                            </div>
                        )
                    }
                    return (
                        <p>No player data</p>
                    )
                })
            }
        </div>
    )
}

export default PlayerCards