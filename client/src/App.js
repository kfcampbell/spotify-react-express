import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { imageUrl: '' }
  }

  componentDidMount() {
    fetch('/example')
      .then(response => response.json())
      .then(json => {
        console.log('json: ', json);
        this.setState({ imageUrl: json.imageUrl });
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={this.state.imageUrl} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
