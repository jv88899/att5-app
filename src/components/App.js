import React, { Component } from 'react'
import Header from './Header/Header'
import './App.css'

class App extends Component {
    state = {
        criteria: {
            per: 1,
            championships: 1,
            ppg: 1,
            mvp: 1,
            allNBA: 1
        }
    }

    handleCriteriaFormSubmit = () => {
        console.log('working')
    }

    render() {
        return (
            <Header
                currentCriteria={this.state.criteria}
                handleCriteriaFormSubmit={this.handleCriteriaFormSubmit}
            />
        )
    }
}

export default App