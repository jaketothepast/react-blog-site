import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav.js';
import NameCard from './NameCard.js';
import StoryContainer from './StoryContainer';

class App extends Component {

    constructor(props) {
        super(props);
    }
    
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NameCard />
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          {/*<h1 className="App-title">Welcome to React</h1>*/}
        </header>
          <Nav />
          <StoryContainer />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
