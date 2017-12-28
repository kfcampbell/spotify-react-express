import React, { Component } from 'react';
import './App.css';
import { SpotifyPlayer } from './player';

class App extends Component {
  constructor() {
    super();
    this.state = { imageUrl: '', 
      player: new SpotifyPlayer({exchangeHost: 'http://localhost:5000'}) };
  }

  componentDidMount() {
    // do any initial setup here
    /*fetch('/example')
      .then(response => response.json())
      .then(json => {
        console.log('json: ', json);
        this.setState({ imageUrl: json.imageUrl });
      })*/
  }

  loginToSportify = () => {
    console.log('login button clicked');
    this.state.player.init();
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="login-container" id="js-login-container">
            <button onClick={this.loginToSportify} className="btn btn--login" id="js-btn-login">Login with Sportify</button>
          </div>
          <div className="hidden" id="js-main-container"></div>
        </div>
      </div>
    );
  }
}

export default App;