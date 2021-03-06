import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Section from './components/Section/Section';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <Section></Section>
    </div>
  );
}

// TODO put credits for background image: "Photo by Ave Calvar on Unsplash"

export default App;
