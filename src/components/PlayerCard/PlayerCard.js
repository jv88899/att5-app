import React from 'react'
import './player-card.css'

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
                            <h3>{player.primaryPosition}</h3>
                            <img src={player.imgURL} alt={player.playerFullName}/>
                            <h2>{player.playerFullName}</h2>
                            <p>Total Score: {player.careerPER}</p>
                        </div>
                    )
                })
            }
        </React.Fragment>
    )
}

export default PlayerCard