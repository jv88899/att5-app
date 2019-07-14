import React, { Component } from 'react'
import './criteria-form.css'

class CriteriaForm extends Component {
    state = {
        newCriteria: {
            newPER: 1,
            newChampionships: 1,
            newPPG: 1,
            newMVP: 1,
            newAllNBA: 1
        }
    }

    handleCriteriaChange = (criteriaToUpdate, newValue) => {
        if (criteriaToUpdate === 'per') {
            console.log(criteriaToUpdate, newValue)
            this.setState( (prevState) => ({
                newCriteria: {
                    newPER: 1 + (newValue * 0.1),
                    newChampionships: prevState.newCriteria.newChampionships,
                    newPPG: prevState.newCriteria.newPPG,
                    newMVP: prevState.newCriteria.newMVP,
                    newAllNBA: prevState.newCriteria.newAllNBA
                }
            }))
        } else if (criteriaToUpdate === 'championships') {
            console.log(criteriaToUpdate, newValue)
            this.setState( prevState => ({
                newCriteria: {
                    newPER: prevState.newCriteria.newPER,
                    newChampionships: 1 + (newValue * 0.1),
                    newPPG: prevState.newCriteria.newPPG,
                    newMVP: prevState.newCriteria.newMVP,
                    newAllNBA: prevState.newCriteria.newAllNBA
                }
            }))
        } else if (criteriaToUpdate === 'ppg') {
            console.log(criteriaToUpdate, newValue)
            this.setState( prevState => ({
                newCriteria: {
                    newPER: prevState.newCriteria.newPER,
                    newChampionships: prevState.newCriteria.newChampionships,
                    newPPG: 1 + (newValue * 0.1),
                    newMVP: prevState.newCriteria.newMVP,
                    newAllNBA: prevState.newCriteria.newAllNBA
                }
            }))
        } else if (criteriaToUpdate === 'mvp') {
            console.log(criteriaToUpdate, newValue)
            this.setState( prevState => ({
                newCriteria: {
                    newPER: prevState.newCriteria.newPER,
                    newChampionships: prevState.newCriteria.newChampionships,
                    newPPG: prevState.newCriteria.newPPG,
                    newMVP: 1 + (newValue * 0.1),
                    newAllNBA: prevState.newCriteria.newAllNBA
                }
            }))
        } else if (criteriaToUpdate === 'allNBA') {
            console.log(criteriaToUpdate, newValue)
            this.setState( prevState => ({
                newCriteria: {
                    newPER: prevState.newCriteria.newPER,
                    newChampionships: prevState.newCriteria.newChampionships,
                    newPPG: prevState.newCriteria.newPPG,
                    newMVP: prevState.newCriteria.newMVP,
                    newAllNBA: 1 + (newValue * 0.1)
                }
            }))
        }
    }

    handleSubmit = e => {
        e.preventDefault()
    }

    render() {
        const { handleCriteriaFormSubmit } = this.props
        return (
            <form
                className="criteria-form"
                onSubmit={this.handleSubmit}
            >
                <select
                    name="per"
                    onChange={ (e) => {
                        let criteria = 'per'
                        let newPer = e.target.value
                        this.handleCriteriaChange(criteria, newPer)
                    }}
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                </select>
                <select
                    name="championships"
                    onChange={ (e) => {
                        let criteria = 'championships'
                        let newChampionships = Number(e.target.value)
                        console.log(typeof newChampionships)
                        this.handleCriteriaChange(criteria, newChampionships)
                    } }
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                </select>
                <select
                    name="ppg"
                    onChange={ e => {
                        let criteria = 'ppg'
                        let newPPG = e.target.value
                        this.handleCriteriaChange(criteria, newPPG)
                    } }
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                </select>
                <select
                    name="mvp"
                    onChange= { e => {
                        let criteria = 'mvp'
                        let newMVP = e.target.value
                        this.handleCriteriaChange(criteria, newMVP)
                    }}
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                </select>
                <select
                    name="allNBA"
                    onChange={ e => {
                        let criteria = 'allNBA'
                        let newAllNBA = e.target.value
                        this.handleCriteriaChange(criteria, newAllNBA)
                    }}
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                </select>
                <button
                    type="submit"
                    onClick={ () => {
                        handleCriteriaFormSubmit(this.state.newCriteria)
                    }}
                >
                    Set Criteria
                </button>
            </form>
        )
    }
}

export default CriteriaForm