import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    allSushi: [],
    startIndex: 0
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


  render() {
    return (
      <div className="app">
        <SushiContainer provideFourSushi={this.provideFourSushi} startIndex={this.state.startIndex}/>
        <Table />
      </div>
    );
  }
}

export default App;

// allSushi={this.state.allSushi} 