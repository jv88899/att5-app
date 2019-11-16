import React, { Component } from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import './header.css'

class Header extends Component {
    render() {
        let headerCriteriaMenuClassess = 'header__criteria__menu'
        return (
            <header className="header">
                <nav className="nav">
                    <div className="flex-container">
                        <div className="nav__brand">
                            <div className="nav__brand__text">
                                <div className="nav__brand__text__letters">
                                    <span>A</span>
                                    <span>T</span>
                                    <span>S</span>
                                    <span>F</span>
                                </div>
                            </div>
                        </div>
                        <div className="nav__menu">
                            <ul className="nav__menu__links">
                                <li>Link 1</li>
                                <li>Tutorial</li>
                                <li>About</li>
                                <li>Donate</li>
                            </ul>
                        </div>
                        <div className="nav__hamburger">
                            <div className="nav__hamburger__bar"></div>
                            <div className="nav__hamburger__bar"></div>
                            <div className="nav__hamburger__bar"></div>
                        </div>
                    </div>
                </nav>
                <div className="header__about">
                    <h1>All Time Starting Five</h1>
                    <p>The best players of all time, according to you</p>
                </div>
                <div className="header__criteria">
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
                                    3
                                </div>
                            </div>
                            <div className="header__criteria__summary__group">
                                <div className="header__criteria__summary__category">
                                    PER
                                </div>
                                <div className="header__criteria__summary__value">
                                    3
                                </div>
                            </div>
                            <div className="header__criteria__summary__group">
                                <div className="header__criteria__summary__category">
                                    CHA
                                </div>
                                <div className="header__criteria__summary__value">
                                    3
                                </div>
                            </div>
                            <div className="header__criteria__summary__group">
                                <div className="header__criteria__summary__category">
                                    NBA
                                </div>
                                <div className="header__criteria__summary__value">
                                    3
                                </div>
                            </div>
                            <div className="header__criteria__summary__group">
                                <div className="header__criteria__summary__category">
                                    MVP
                                </div>
                                <div className="header__criteria__summary__value">
                                    3
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                    <div className={headerCriteriaMenuClassess}>
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
                                /> 
                            </div>
                            <div className="header__slider_value">
                                3
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
                                />
                            </div>
                            <div className="header__slider__value">
                                3
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
                                />
                            </div>
                            <div className="header__slider__value">
                                3
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
                                />
                            </div>
                            <div className="header__slider__value">
                                3
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
                                />
                            </div>
                            <div className="header__slider__value">
                                3
                            </div>
                        </div>
                    </div>
                    <div className="header__criteria__button">
                        {
                            false ?
                            <div className="header__criteria__button__container">
                                <button
                                    className="header__criteria__button__set"
                                >
                                    Change Criteria
                                </button>
                                <button
                                    className="header__criteria__button__close"
                                >
                                    Close Menu
                                </button>
                            </div> :
                            <button
                            >
                                View Criteria
                            </button>
                        }
                    </div>
                </div>
                <div className="header__search">
                        <form>
                            <label>Search for player</label>
                            <div className="header__search__group">
                                <input
                                    type="text"
                                />
                                <button
                                >
                                    Search
                                </button>
                            </div>
                        </form>
                </div>
            </header>
        )
    }
}

export default Header