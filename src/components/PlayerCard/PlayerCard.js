import React from 'react'

const PlayerCard = props => {
    const { players } = props
    return (
        <React.Fragment>
            {
                players.map( player => {
                    return (
                        <div
                            key={player.playerFullName}
                            className="player-card"
                        >
                            <span>{player.playerFullName}</span>
                        </div>
                    )
                })
            }
        </React.Fragment>
    )
}

export default PlayerCard