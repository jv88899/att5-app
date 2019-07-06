import React from 'react'

const AllTimeStartingFive = props => {
    const { selectAllTimeStartingFive } = props
    return (
        <button
            className="all-time-starting-five"
            onClick={selectAllTimeStartingFive}
        >
            All Time Starting Five
        </button>
    )
}

export default AllTimeStartingFive