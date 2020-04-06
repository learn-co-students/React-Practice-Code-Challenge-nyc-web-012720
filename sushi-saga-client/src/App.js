import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushis: []
  }

  componentDidMount() {
    fetch(API)
      .then(resp => resp.json())
      // .then(data => console.log(data))
      .then(data => this.setState({
        sushis: data
      }))
  }

  render() {
    return (
      <div className="app">
        <SushiContainer />
        <Table />
      </div>
    );
  }
}

export default App;