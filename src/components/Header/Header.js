import React, { Component } from 'react'
import CriteriaForm from '../CriteriaForm/CriteriaForm'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import './header.css'

class Header extends Component {
    state = {
        criteriaMenuVisible: false,
    }

    render() {
        const {
            currentCriteria
        } = this.props

        const {
            criteriaMenuVisible
        } = this.state

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
                <CriteriaForm
                    handleCriteriaFormSubmit={this.props.handleCriteriaFormSubmit}
                />
                <div className="header__position-menu">
                    <div className="header__position-menu__wrapper">
                        <div>
                            <button>All</button>
                        </div>
                        <div>
                            <button>PG</button>
                        </div>
                        <div>
                            <button>SG</button>
                        </div>
                        <div>
                            <button>SF</button>
                        </div>
                        <div>
                            <button>PF</button>
                        </div>
                        <div>
                            <button>C</button>
                        </div>
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