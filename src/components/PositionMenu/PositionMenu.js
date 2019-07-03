import React from 'react'

const PositionMenu = props => {
    const { selectNewPosition } = props
    const positions = ['All', 'PG', 'SG', 'SF', 'PF', 'C']
    return (
        <div className="position-menu-container">
            {
                positions.map( position => (
                    <button
                        key={position}
                        onClick={ () => {
                            selectNewPosition(position)
                        }}
                    >
                        {position}
                    </button>
                ))
            }
        </div>
    )
}

export default PositionMenu