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
        
      </div>
    );
  }
}

export default App;
