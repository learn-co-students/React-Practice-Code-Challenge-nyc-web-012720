import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [], 
    pageCount: 0,
    budget: null
  }

  componentDidMount() {
    fetch(API)
    .then(response => response.json())
    .then(sushis => this.setState({
      sushis: sushis
    }))
  }


  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushis} pageCount={this.state.pageCount} />
        <Table />
      </div>
    );
  }
}

export default App;