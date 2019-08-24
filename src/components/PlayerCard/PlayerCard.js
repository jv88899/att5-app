import React, { Component } from 'react'
import { FaInfoCircle } from 'react-icons/fa'
import './player-card.css'

class PlayerCard extends Component {
    state = {
        modalVisible: false
    }

    handleClick = () => {

    }

    render() {
        const { player, handleSelectScoreInformation } = this.props
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
                    <p>{player.primaryPosition}</p>
                    <h2>{player.playerFullName}</h2>
                </div>
                <div
                    className="player-card-footer"
                >
                    <h3>Score: {player.score}</h3>
                    <FaInfoCircle
                        size={36}
                        onClick={() => handleSelectScoreInformation(player)}
                    />
                </div>
            </div>
        )
    }
}

// const PlayerCard = props => {
//     const { player } = props
//     return (
//         <div
//             className="player-card"
//         >
//             <div
//                 className="player-card-image"
//             >
//                 <img src={player.imgURL} alt={player.playerFullName} />
//             </div>
//             <div
//                 className="player-card-information"
//             >
//                 <p>{player.primaryPosition}</p>
//                 <h2>{player.playerFullName}</h2>
//             </div>
//             <div
//                 className="player-card-footer"
//             >
//                 <h3>Score: {player.score}</h3>
//                 <FaInfoCircle size={36} />
//             </div>
//         </div>
//     )
// }

export default PlayerCard