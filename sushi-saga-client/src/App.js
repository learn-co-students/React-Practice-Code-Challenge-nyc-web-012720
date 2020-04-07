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
    budget: 100,
    amount: ''
  }
  
  eatSushi = (sushi) => {
    const targetSushi = this.state.sushis.find(s => s.id === sushi.id)
    const newMoney = this.state.budget - targetSushi.price

    if (!this.state.eaten.includes(sushi.id)){
      this.setState({
        eaten: [...this.state.eaten, sushi.id],
        budget: newMoney
      })
    } else {
      alert('You do not have enough money. You broke!')
    }
   
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
      startIndex: newIndex >= this.state.sushis.length ? 0 : newIndex
    })
  }

  handleChange = e => {
    this.setState({
      amount: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.setState({
      budget: this.state.budget + parseInt(this.state.amount),
      amount: ''
    })
  }

  render() {
    return (
      <div className="app">
        <form onSubmit={this.handleSubmit}>
        <label>Add Money
          <input type="text" onChange={e => this.handleChange(e)} value={this.state.amount}/>
          <input type="submit"/>
        </label>
        </form>
        <SushiContainer 
          sushis={this.state.sushis} 
          eatSushi={this.eatSushi} 
          eaten={this.state.eaten}
          index={this.state.startIndex}
          increaseIndex={this.increaseIndex}
          budget={this.state.budget} />
        <Table 
          eaten={this.state.eaten} 
          budget={this.state.budget}/>
      </div>
    );
  }
}

export default App;