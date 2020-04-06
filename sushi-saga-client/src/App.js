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
    budget: 150
  }
  
  eatSushi = (sushi) => {
    this.setState({
      eaten: [...this.state.eaten, sushi]
    })
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