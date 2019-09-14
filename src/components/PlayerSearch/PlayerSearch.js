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
        // this.setState({ searchTerm: e.target.value})
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
            }, 3000)
        }
    }

    render() {
        console.log('props', this.props)
        return (
            <form>
                <label htmlFor="player-name">
                    Search for a player
                </label>
                <input
                    type="text"
                    id="player-search"
                    className="player-search-input"
                    placeholder="type player name"
                    autoComplete="off"
                    value={this.state.searchTerm}
                    onChange={this.handleChange}
                />
                <button
                    type="submit"
                    disabled={!this.state.playerName}
                >
                    Search
                </button>
            </form>
        )
    }
}

export default PlayerSearch