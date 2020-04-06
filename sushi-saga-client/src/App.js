import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushis: [],
    displaySushis: [],
    sushiIdx: [0,4],
    eaten: [],
    money: 100
  }

  componentDidMount(){
    fetch(API)
      .then(res => res.json())
      .then(sushis => {
        this.setState({sushis, displaySushis:sushis.slice(0,4)})
      })
      .catch(err => console.log(err))
  }

  whichSushis = () => {
    this.setState(prevState => {
      const sushiIdx = prevState.sushiIdx[1] === 100 ? [0,4] : [prevState.sushiIdx[0] + 4, prevState.sushiIdx[1] + 4];
      const displaySushis = this.state.sushis.slice(sushiIdx[0], sushiIdx[1]);
      return {sushiIdx, displaySushis}
    })
  }

  eatSushi = (sushiBoi) => {
    let amountLeft = this.state.money - sushiBoi.price;
    if (amountLeft > 0) {
      this.setState({
        eaten: [
          ...this.state.eaten,
          sushiBoi
        ],
        money: amountLeft
      })
    } else {
      alert("Not enough money for Sushi Bois!")
    }
  }

  getCashStacks = (value) => {
    console.log(value)
    this.setState(prevState => {
      const money = prevState.money + Number(value);
      return {money}
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.state.displaySushis} moreSushi={this.whichSushis} eatSushi={this.eatSushi} eaten={this.state.eaten}/>
        <Table plates={this.state.eaten} bankroll={this.state.money} getMonies={this.getCashStacks}/>
      </div>
    );
  }
}

export default App;