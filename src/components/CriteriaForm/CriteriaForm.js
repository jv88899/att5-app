import React, { Component } from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

class CriteriaForm extends Component {
    state = {
        currentCriteria: {
            per: 1,
            championships: 1,
            ppg: 1,
            mvp: 1,
            allNBA: 1
        },
        criteriaMenuVisible: true
    }

    changeLevel = (e, sliderToUpdate) => {
        if (sliderToUpdate === 'sliderPER') {
            this.setState( prevState => ({
                currentCriteria: {
                    per: e,
                    championships: prevState.currentCriteria.championships,
                    ppg: prevState.currentCriteria.ppg,
                    mvp: prevState.currentCriteria.mvp,
                    allNBA: prevState.currentCriteria.allNBA
                }
            }))
        } else if (sliderToUpdate === 'sliderChampionships') {
            this.setState( prevState => ({
                currentCriteria: {
                    per: prevState.currentCriteria.per,
                    championships: e,
                    ppg: prevState.currentCriteria.ppg,
                    mvp: prevState.currentCriteria.mvp,
                    allNBA: prevState.currentCriteria.allNBA
                }
            }))
        } else if (sliderToUpdate === 'sliderPPG') {
            this.setState( prevState => ({
                currentCriteria: {
                    per: prevState.currentCriteria.per,
                    championships: prevState.currentCriteria.championships,
                    ppg: e,
                    mvp: prevState.currentCriteria.mvp,
                    allNBA: prevState.currentCriteria.allNBA
                }
            }))
        } else if (sliderToUpdate === 'sliderMVP') {
            this.setState( prevState => ({
                currentCriteria: {
                    per: prevState.currentCriteria.per,
                    championships: prevState.currentCriteria.championships,
                    ppg: prevState.currentCriteria.ppg,
                    mvp: e,
                    allNBA: prevState.currentCriteria.allNBA
                }
            }))
        } else if (sliderToUpdate === 'sliderAllNBA') {
            this.setState( prevState => ({
                currentCriteria: {
                    per: prevState.currentCriteria.per,
                    championships: prevState.currentCriteria.championships,
                    ppg: prevState.currentCriteria.ppg,
                    mvp: prevState.currentCriteria.mvp,
                    allNBA: e
                }
            }))
        }
    }

    handleViewCriteria = () => {
        this.setState({ criteriaMenuVisible: !this.state.criteriaMenuVisible })
    }

    render() {
        const { currentCriteria, criteriaMenuVisible } = this.state
        const { handleCriteriaFormSubmit } =  this.props

        let headerCriteriaMenuClasses = 'header__criteria__menu'
        if (criteriaMenuVisible) {
            headerCriteriaMenuClasses = 'header__criteria__menu visible'
        }

        return (
            <div className="header__criteria">
                {
                    !criteriaMenuVisible &&
                    <React.Fragment>
                        <div className="header__criteria__title">
                            <h2>Current Criteria</h2>
                        </div>
                        <div className="header__criteria__summary">
                            <div className="header__criteria__summary__group">
                                <div className="header__criteria__summary__category">
                                    PPG
                                </div>
                                <div className="header__criteria__summary__value">
                                    {currentCriteria.ppg}
                                </div>
                            </div>
                            <div className="header__criteria__summary__group">
                                <div className="header__criteria__summary__category">
                                    PER
                                </div>
                                <div className="header__criteria__summary__value">
                                    {currentCriteria.per}
                                </div>
                            </div>
                            <div className="header__criteria__summary__group">
                                <div className="header__criteria__summary__category">
                                    CHA
                                </div>
                                <div className="header__criteria__summary__value">
                                    {currentCriteria.championships}
                                </div>
                            </div>
                            <div className="header__criteria__summary__group">
                                <div className="header__criteria__summary__category">
                                    NBA
                                </div>
                                <div className="header__criteria__summary__value">
                                    {currentCriteria.allNBA}
                                </div>
                            </div>
                            <div className="header__criteria__summary__group">
                                <div className="header__criteria__summary__category">
                                    MVP
                                </div>
                                <div className="header__criteria__summary__value">
                                    {currentCriteria.mvp}
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                }
                <div className={headerCriteriaMenuClasses}>
                    <div className="header__criteria__slider__group">
                        <div className="header__slider__label">
                            PPG
                        </div>
                        <div className="header__slider">
                            <Slider
                                defaultValue={1}
                                min={1}
                                max={9}
                                step={1}
                                onAfterChange={(e) => {
                                    this.changeLevel(e, 'sliderPPG')
                                }}
                            />
                        </div>
                        <div className="header__slider__value">
                            {currentCriteria.ppg}
                        </div>
                    </div>
                    <div className="header__criteria__slider__group">
                        <div className="header__slider__label">
                            PER
                        </div>
                        <div className="header__slider">
                            <Slider
                                defaultValue={1}
                                min={1}
                                max={9}
                                step={1}
                                onAfterChange={(e) => {
                                    this.changeLevel(e, 'sliderPER')
                                }}
                            />
                        </div>
                        <div className="header__slider__value">
                            {currentCriteria.per}
                        </div>
                    </div>
                    <div className="header__criteria__slider__group">
                        <div className="header__slider__label">
                            CHA
                        </div>
                        <div className="header__slider">
                            <Slider
                                defaultValue={1}
                                min={1}
                                max={9}
                                step={1}
                                onAfterChange={(e) => {
                                    this.changeLevel(e, 'sliderChampionships')
                                }}
                            />
                        </div>
                        <div className="header__slider__value">
                            {currentCriteria.championships}
                        </div>
                    </div>
                    <div className="header__criteria__slider__group">
                        <div className="header__slider__label">
                            NBA
                        </div>
                        <div className="header__slider">
                            <Slider
                                defaultValue={1}
                                min={1}
                                max={9}
                                step={1}
                                onAfterChange={(e) => {
                                    this.changeLevel(e, 'sliderAllNBA')
                                }}
                            />
                        </div>
                        <div className="header__slider__value">
                            {currentCriteria.allNBA}
                        </div>
                    </div>
                    <div className="header__criteria__slider__group">
                        <div className="header__slider__label">
                            MVP
                        </div>
                        <div className="header__slider">
                            <Slider
                                defaultValue={1}
                                min={1}
                                max={9}
                                step={1}
                                onAfterChange={(e) => {
                                    this.changeLevel(e, 'sliderMVP')
                                }}
                            />
                        </div>
                        <div className="header__slider__value">
                            {currentCriteria.mvp}
                        </div>
                    </div>
                </div>
                <div className="header__criteria__button">
                    {
                        criteriaMenuVisible ?
                        <div className="header__criteria__button__container">
                            <button
                                className="header__criteria__button__set"
                                onClick={handleCriteriaFormSubmit}
                            >
                                Change Criteria
                            </button>
                            <button
                                className="header__criteria__button__close"
                                onClick={this.handleViewCriteria}
                            >
                                Close Menu
                            </button>
                        </div> :
                        <button
                            onClick={this.handleViewCriteria}
                        >
                            View Criteria
                        </button>
                    }
                </div>
            </div>
        )
    }
}

export default CriteriaForm