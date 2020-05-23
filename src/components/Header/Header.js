import React, { Component } from 'react'
import './Header.css'

export default class Header extends Component {
  render() {
    return (
      <div>
        <nav className="menu">
          <label htmlFor="btn-hamburger">&#9776;</label>
          <input type="checkbox" id="btn-hamburger"></input>
          <ul>
            <li><a className="link" href="#home">Home</a></li>
            <li><a className="link" href="#about">About</a></li>
            <li><a className="link" href="#test">Skills</a></li>
            <li><a className="link" href="#test">Projects</a></li>
            <li><a className="link" href="#test">Contact</a></li>
          </ul>
        </nav>
      </div>
    )
  }
}