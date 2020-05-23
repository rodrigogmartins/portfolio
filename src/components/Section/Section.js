import React, { Component } from 'react'
import './Section.css'

export default class Section extends Component {
  render() {
    return (
      <section id="about">
        <div className="texto">
          <h1>About</h1>
          <p>
            Adicionado texto qualquer só de exemplo para exemplificar meu texto de sobre.
          </p>
        </div>
        <div className="img"></div>
      </section>
    )
  }
}