import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis/"

class App extends Component {

  state = {
    sushis: [],
    amount: 50
  }

  componentDidMount(){
    fetch(API)
    .then(response => response.json())
    .then(sushis => this.setState({sushis: sushis.slice(0,4)}))
  }

  eatSushi = (sushiId) => {
    let sushiCopy = [...this.state.sushis]
    let selectedSushi = sushiCopy.find(sushi => sushi.id === sushiId)
    if (this.state.amount >= selectedSushi.price) {
      selectedSushi.eaten = true
      this.setState({
        sushis: sushiCopy,
        amount: this.state.amount - selectedSushi.price
      })
    } if (this.state.amount < selectedSushi.price) {
      alert("You don't have enough money")
    }
  }

  render() {
    let sushiCopy = [...this.state.sushis]
    let uneatenSushis
    uneatenSushis = sushiCopy.filter(sushi => !sushi.eaten)
    let eatenSushis = sushiCopy.filter(sushi => sushi.eaten)
        return (
      <div className="app">
        <button onClick={() => console.log(this.state)}>See State</button>
        <SushiContainer sushis={this.state.sushis} eatSushi={this.eatSushi}/>
        <Table amount={this.state.amount} sushis={eatenSushis}/>
      </div>
    );
  }
}

export default App;