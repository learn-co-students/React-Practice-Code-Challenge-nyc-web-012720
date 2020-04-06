import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [], 
    pageCount: 1,
    budget: 100, 
    piecesEaten: 0
  }

  componentDidMount() {
    fetch(API)
    .then(response => response.json())
    .then(sushis => this.setState({
      sushis: sushis
    }))
  }

  moreButton = () => {
    this.setState({
      pageCount: this.state.pageCount + 4
    })
  }
  
  piecesEaten = () => {
    this.setState({
      piecesEaten: this.state.piecesEaten + 1
    })
  }

  render() {
    console.log(this.state.piecesEaten)
    return (
      <div className="app">
        <SushiContainer 
          sushis={this.state.sushis} 
          pageCount={this.state.pageCount} 
          moreButton={this.moreButton}
          piecesEaten={this.piecesEaten} 
        />
        <Table 
          budget={this.state.budget}
          piecesEaten={this.state.piecesEaten}
        />
      </div>
    );
  }
}

export default App;