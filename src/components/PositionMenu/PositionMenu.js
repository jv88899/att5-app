import React from 'react'

const PositionMenu = props => {
    const { selectNewPosition, currentPosition } = props
    const positions = ['All', 'PG', 'SG', 'SF', 'PF', 'C']
    return (
        <div className="position-menu-container">
            {
                positions.map( position => (
                    <button
                        key={position}
                        style={ position === currentPosition ? { color: 'rgb(187, 46, 31' } : null }
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