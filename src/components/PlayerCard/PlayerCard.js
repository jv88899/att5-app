import React, { Component } from 'react'
import { FaInfoCircle } from 'react-icons/fa'
import './player-card.css'

class PlayerCard extends Component {
    state = {
        modalVisible: false,
        active: false
    }

    handleClick = (e, playerId) => {
        // e.preventDefault()
        console.log('playerId here is', playerId)
        if (this.state.active) {
            // this.props.removePlayerToCompare(playerId)
        } else {
            this.props.addPlayerToCompare(playerId)
        }
        this.setState({ active: !this.state.active })
    }

    render() {
        const { player, handleSelectScoreInformation } = this.props
        let cssClass = 'player-card'
        this.state.active ? cssClass = 'player-card active' : cssClass = 'player-card'
        return (
            <div
                className={cssClass}
                onClick={(e) => {
                    this.handleClick(e, player._id)
                }}
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
                    onClick={ () => console.log('workinggggggggg') }
                >
                    <h3>Score: {player.score}</h3>
                    <FaInfoCircle
                        size={36}
                        onClick={e => {
                            e.stopPropagation()
                            handleSelectScoreInformation(player)
                        }}
                    />
                </div>
            </div>
        )
    }
}

export default PlayerCard