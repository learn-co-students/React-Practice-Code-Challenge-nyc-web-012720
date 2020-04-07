import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    allSushi: [],
    startIndex: 0,
    sushiBudget: 100,
    startingBudget: 100,
    eatenSushi: []
  }

  componentDidMount() {
    fetch(API)
    .then(resp => resp.json())
    .then(data => this.setState({ allSushi: data} ))
  }

  provideFourSushi = () => {
    let sushiToRender = this.state.allSushi
    return sushiToRender.slice(this.state.startIndex, this.state.startIndex + 4)
  }

  advanceSushi = () => {
    let newIndex = this.state.startIndex + 4
    this.setState({ startIndex: newIndex})
  }

  addEatenSushi = (sushiObj) => {
    console.log(sushiObj)
    
    let eatenArray = this.state.eatenSushi
    console.log(eatenArray)

    eatenArray.push(sushiObj)
    console.log(eatenArray)
    
    this.setState({eatenSushi: eatenArray})
  }

  calculateSpent = () => {
    let totalSpend = 0
    this.state.eatenSushi.forEach(element => {totalSpend += element.price})
      this.setState({sushiBudget: this.state.startingBudget - totalSpend})
    }




  render() {
    return (
      <div className="app">
        <SushiContainer provideFourSushi={this.provideFourSushi} advanceSushi={this.advanceSushi} addEatenSushi={this.addEatenSushi}/>
        <Table sushiBudget={this.state.sushiBudget}/>
      </div>
    );
  }
}

export default App;

// allSushi={this.state.allSushi} 