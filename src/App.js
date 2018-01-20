import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import YouTube from 'react-youtube';

import LilCroixCan from './lil-croix-can.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
          {
            (Array(400)+'').split(',').map(x=> <img src={LilCroixCan} height="100px"/>)
          }
        </div>
      </div>
    );
  }
}

export default App;
