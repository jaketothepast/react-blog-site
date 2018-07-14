import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav.js';
import NameCard from './NameCard.js';
import StoryContainer from './StoryContainer';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends Component {

    constructor(props) {
        super(props);
    }
    
  render() {
    return (
        <div className="App">
          <header className="App-header">
            <NameCard name="Jake Windle" />
          </header>
          <Nav />
          <Switch>
            <Route path="/stories" component={StoryContainer} />
          </Switch>
        </div>
    );
  }
}

class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    );
  }
}

export default Main;
