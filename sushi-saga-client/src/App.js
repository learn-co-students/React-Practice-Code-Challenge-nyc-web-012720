import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushi: [],
    eaten: [],
    budget: 102
  }

  componentDidMount = () => {
    fetch(` http://localhost:3000/sushis`)
    .then(resp => resp.json())
    .then(sushi => this.setState({
      sushi: sushi
    }))
  }


  handleEat = (id) => {
    if(!this.state.eaten.includes(id)){
      const targetSushi = this.state.sushi.find( x => x.id === id)
    this.setState({ 
      eaten: [...this.state.eaten, id], 
      budget: this.state.budget - targetSushi.price})
  }}

  render() {
    // console.log(this.state.sushi)
    return (
      <div className="app">
        <SushiContainer eaten={this.state.eaten} sushi={this.state.sushi} handleEat={this.handleEat}/>
        <Table eaten={this.state.eaten} budget={this.state.budget}/>
      </div>
    );
  }
}

export default App;