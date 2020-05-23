import React, { Component } from 'react'
import './Banner.css'

export default class Banner extends Component {
  render() {
    return (
      <div className="banner">
        <div className="banner-img">
          <h1 className="banner-text">
            <p>Hi, my name is Rodrigo Martins.</p>
            <p>I'm junior Full-stack developer and this is my portfolio</p>
          </h1>
        </div>
      </div>
    )
  }
}