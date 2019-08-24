import React from 'react'
import './score-information-modal.css'

const ScoreInformationModal = props => {
    const { visible, hideModal, selectedPlayer } = props
    console.log('props = ', props)
    let classes = 'score-information-modal-container'

    if (visible) {
        classes = 'score-information-modal-container visible'
    }
    return (
        <div className={classes}>
            <div className="score-information-modal">
                <div>
                    {selectedPlayer ? <p>{selectedPlayer.playerFullName}</p> : null}
                </div>
                <div>
                    {selectedPlayer ? <p>Score: {selectedPlayer.score}</p> : null}
                </div>
                <div>
                    {selectedPlayer ? <p>Tier 1: {selectedPlayer.tier1}</p> : null}
                    {selectedPlayer ? <p>Tier 2: {selectedPlayer.tier2}</p> : null}
                    {selectedPlayer ? <p>Tier 3: {selectedPlayer.tier3}</p> : null}
                    {selectedPlayer ? <p>Tier 4: {selectedPlayer.tier4}</p> : null}
                    {selectedPlayer ? <p>Tier 5: {selectedPlayer.tier5}</p> : null}
                </div>
                <div
                    className="close-button"
                    onClick={hideModal}
                >
                CLOSE
                </div>
            </div>
        </div>
    )
}

export default ScoreInformationModal