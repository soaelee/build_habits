import React from 'react'
import './navbar.css';

export default function Navbar(props) {
    return (
        <nav className="navbar">
            <i className="nav-logo fas fa-leaf"></i>
            <span className="nav-title">Making Habit</span>
            <span className="nav-count">{props.total}</span>
        </nav>
    )
}
