import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis/"

class App extends Component {

  state = {
    sushis: []
  }

  componentDidMount(){
    fetch(API)
    .then(response => response.json())
    .then(sushis => this.setState({sushis: sushis.slice(0,4)}))
  }

  eatSushi = (sushiId) => {
    let sushiCopy = [...this.state.sushis]
    let selectedSushi = sushiCopy.find(sushi => sushi.id === sushiId)
    selectedSushi.eaten = true
    this.setState({
      sushis: sushiCopy
    })
  }

  render() {
    let sushiCopy = [...this.state.sushis]
    let uneatenSushis
    uneatenSushis = sushiCopy.filter(sushi => !sushi.eaten)
    let eatenSushis = sushiCopy.filter(sushi => sushi.eaten)
    debugger
        return (
      <div className="app">
        <button onClick={() => console.log(this.state)}>See State</button>
        <SushiContainer sushis={this.state.sushis} eatSushi={this.eatSushi}/>
        <Table sushis={eatenSushis}/>
      </div>
    );
  }
}

export default App;