import React, { Component } from 'react'
import './player-search.css'

class PlayerSearch extends Component {
    state = {
        searchTerm: '',
        searching: false
    }

    handleSubmit = e => {
        e.preventDefault()
    }

    handleChange = e => {
        this.setState({
            searchTerm: e.target.value,
            searching: true
        })

        if (this.state.searching) {
            console.log('i cant, youre already searching')
        } else {
            setTimeout( () => {
                this.props.handlePlayerSearchChange(this.state.searchTerm)
                this.setState({ searching: false })
            }, 2000)
        }
    }

    render() {
        return (
            <form>
                <label htmlFor="player-name">
                    Search for a player
                </label>
                <div>
                    <input
                        type="text"
                        id="player-search"
                        className="player-search-input"
                        placeholder="type player name"
                        autoComplete="off"
                        value={this.state.searchTerm}
                        onChange={this.handleChange}
                    />
                </div>
            </form>
        )
    }
}

export default PlayerSearch