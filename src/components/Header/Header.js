import React, { Component } from 'react'
import './Header.css'

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <span className="link"><a href="#test">Home</a></span>
        <span className="link"><a href="#test">About</a></span>
        <span className="link"><a href="#test">Skills</a></span>
        <span className="link"><a href="#test">Projects</a></span>
        <span className="link"><a href="#test">Contact</a></span>
      </div>
    )
  }
}