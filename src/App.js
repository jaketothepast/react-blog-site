import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav.js';
import StoryContainer from './StoryContainer';

class App extends Component {

    constructor(props) {
        super(props);

        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            searchTerm: "",
            searchUrl: ""
        }
    }

    handleKeyUp() {
        console.log("KeyUp");


    }

    handleChange(event) {
        console.log("handled Change");
        this.setState({searchTerm: event.target.value})
    }
    
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          {/*<h1 className="App-title">Welcome to React</h1>*/}
        </header>

          <input onKeyUp={(e) => this.handleKeyUp(e)} onChange={this.handleChange} type="search" value={this.state.searchTerm} />
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
