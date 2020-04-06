import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis/"

class App extends Component {

  state = {
    sushis: [],
    eatenSushis: []
  }

  componentDidMount(){
    fetch(API)
    .then(response => response.json())
    .then(sushis => this.setState({sushis: sushis.slice(0,4)}))
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushis}/>
        <Table />
      </div>
    );
  }
}

export default App;