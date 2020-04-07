import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushis: [], 
    eaten: [], 
    budget: 155
  }

  // keep an array of IDs of eaten sushis in App state
  // when a sushi is eaten, add its ID into the eaten array
  // when a sushi is rendered, if its ID is in the eaten array, do not show an image

  componentDidMount() {
    fetch(API)
      .then(resp => resp.json())
      // .then(data => console.log(data))
      .then(data => this.setState({
        sushis: data
      }))
  }

  handleEat = (id) => {
    const thisSushi = this.state.sushis.find(sushi => sushi.id === id)
    // when a sushi is "eaten", we copy the sushi object and add in 
    // a key of isEaten, equal to true
    let newSushis = this.state.sushis.map(sushi => {
      if (sushi.id === id) {
        return {...sushi, isEaten: true}
      } else {
        return sushi 
      }
    })
    // if the sushi has not already been eaten AND the price of the sushi
    // is less than or equal to our remaining budget, we can eat the sushi
    if (!this.state.eaten.includes(id) && thisSushi.price <= this.state.budget) {
      this.setState({
        eaten: [...this.state.eaten, id], 
        budget: this.state.budget - thisSushi.price, 
        sushis: newSushis
      })
    } else {
      alert("You're broke...come back when you have more money!")
    }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer
          sushis={this.state.sushis}
          eaten={this.state.eaten}
          handleEat={this.handleEat}
        />
        <Table
          eaten={this.state.eaten}
          budget={this.state.budget}
        />
      </div>
    );
  }
}

export default App;