import React, { Component } from 'react'
import './Section.css'

export default class Section extends Component {
  render() {
    return (
      <section id="about">
        <div className="container">
          <div className="texto">
            <h1>Rodrigo G. Martins</h1>
            <p>
              Full-stack developer with the desire to be a t-shaped professional with a focus on Back-end development. I like to get and share knowledges.
            </p>
            <p>
              I have interests on CI/CD, DevOps, automated tests, software architecture, security, data structures and code refatoring.
            </p>
          </div>
          <div className="img"></div>
        </div>
      </section>
    )
  }
}