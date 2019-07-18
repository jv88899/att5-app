import React from 'react'
import './all-time-starting-five.css'

const AllTimeStartingFive = props => {
    const { selectAllTimeStartingFive, currentPosition } = props
    console.log(`current position is`, currentPosition)
    return (
        <button
            className="all-time-starting-five"
            onClick={selectAllTimeStartingFive}
            style={ currentPosition === 'all-time' ? { color: 'rgb(187, 46, 31' } : null }
        >
            All Time Starting Five
        </button>
    )
}

export default AllTimeStartingFive