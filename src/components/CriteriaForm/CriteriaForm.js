import React, { Component } from 'react'
import './criteria-form.css'

class CriteriaForm extends Component {
    state = {
        criteria: {
            per: 1,
            championships: 1,
            ppg: 1,
            mvp: 1,
            allNBA: 1
        }
    }

    handleCriteriaChange = (criteriaToUpdate, newValue) => {
        if (criteriaToUpdate === 'per') {
            this.setState( (prevState) => ({
                criteria: {
                    per: 1 + (newValue * 0.1),
                    championships: prevState.criteria.championships,
                    ppg: prevState.criteria.ppg,
                    mvp: prevState.criteria.mvp,
                    allNBA: prevState.criteria.allNBA
                }
            }))
        } else if (criteriaToUpdate === 'championships') {
            this.setState( prevState => ({
                criteria: {
                    per: prevState.criteria.per,
                    championships: 1 + (newValue * 0.1),
                    ppg: prevState.criteria.ppg,
                    mvp: prevState.criteria.mvp,
                    allNBA: prevState.criteria.allNBA
                }
            }))
        } else if (criteriaToUpdate === 'ppg') {
            this.setState( prevState => ({
                criteria: {
                    per: prevState.criteria.per,
                    championships: prevState.criteria.championships,
                    ppg: 1 + (newValue * 0.1),
                    mvp: prevState.criteria.mvp,
                    allNBA: prevState.criteria.allNBA
                }
            }))
        } else if (criteriaToUpdate === 'mvp') {
            this.setState( prevState => ({
                criteria: {
                    per: prevState.criteria.per,
                    championships: prevState.criteria.championships,
                    ppg: prevState.criteria.ppg,
                    mvp: 1 + (newValue * 0.1),
                    allNBA: prevState.criteria.allNBA
                }
            }))
        } else if (criteriaToUpdate === 'allNBA') {
            this.setState( prevState => ({
                criteria: {
                    per: prevState.criteria.per,
                    championships: prevState.criteria.championships,
                    ppg: prevState.criteria.ppg,
                    mvp: prevState.criteria.mvp,
                    allNBA: 1 + (newValue * 0.1)
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
                className="criteria-form-container"
                onSubmit={this.handleSubmit}
            >
                <select
                    name="per"
                    onChange={ (e) => {
                        let criteria = 'per'
                        let newPer = e.target.value
                        // console.log(typeof newPer)
                        newPer = parseFloat(newPer)
                        // console.log(typeof newPer)
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
                        let newChampionships = parseFloat(e.target.value)
                        // console.log(typeof newChampionships)
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
                        let newPPG = parseFloat(e.target.value)
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
                        let newMVP = parseFloat(e.target.value)
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
                        let newAllNBA = parseFloat(e.target.value)
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
                        handleCriteriaFormSubmit(this.state.criteria)
                    }}
                >
                    Set Criteria
                </button>
            </form>
        )
    }
}

export default CriteriaForm