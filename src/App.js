import React, { Component } from 'react';
import SongsContainer from './containers/SongsContainer'
import './App.css';

class App extends Component {
  render() {
    return (
      <SongsContainer
      title="UK Top 20 Songs, compiled by iTunes"/>
    );
  }
}

export default App;
