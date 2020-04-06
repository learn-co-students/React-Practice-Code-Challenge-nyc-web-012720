import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [], 
    pageCount: 1,
    budget: 100
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

  eatSushi = () => {
    
  }

  render() {
    console.log(this.state)
    return (
      <div className="app">
        <SushiContainer 
          sushis={this.state.sushis} 
          pageCount={this.state.pageCount} 
          moreButton={this.moreButton} 
          eatSushi={this.eatSushi}
        />
        <Table budget={this.state.budget}/>
      </div>
    );
  }
}

export default App;