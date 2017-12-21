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
        <div className="container">
          <div className="login-container hidden" id="js-login-container">
            <button className="btn btn--login" id="js-btn-login">Login with Sportify</button>
          </div>
          <div className="hidden" id="js-main-container"></div>
        </div>
      </div>
    );
  }
}

export default App;
