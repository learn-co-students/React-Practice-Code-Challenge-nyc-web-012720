import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state={
    sushis: [],
    startIndex: 0,
    eaten: [],
    budget: 100
  }
  
  eatSushi = (sushi) => {
    const targetSushi = this.state.sushis.find(s => s.id === sushi.id)
    const newMoney = this.state.budget - targetSushi.price

    if (!this.state.eaten.includes(sushi.id)){
      this.setState({
        eaten: [...this.state.eaten, sushi.id],
        budget: newMoney
      })
    }
    console.log(newMoney)
  }

  componentDidMount(){
    fetch(API)
    .then(res=> res.json())
    .then(sushis => {
      this.setState({sushis})
    })
  }

  increaseIndex = () => {
    let newIndex = this.state.startIndex + 4
    this.setState({
      startIndex: newIndex
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer 
          sushis={this.state.sushis} 
          eatSushi={this.eatSushi} 
          eaten={this.state.eaten}
          index={this.state.startIndex}
          increaseIndex={this.increaseIndex}
          budget={this.state.budget} />
        <Table eaten={this.state.eaten} budget={this.state.budget}/>
      </div>
    );
  }
}

export default App;