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

  addEatenSushi = (eatenSushi) => {
    let eatenArray = this.state.eatenSushi
    let newEatenArray = eatenArray.push(eatenSushi)
    this.setState({eatenSushi: newEatenArray})
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