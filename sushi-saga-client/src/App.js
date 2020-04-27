import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state ={
    sushi: [],
    displayed: true
  }

  componentDidMount(){
    fetch('http://localhost:3000/sushis')
    .then(response => response.json())
    .then(data => {
      this.setState({
        sushi: data
      })
    })
  }

  render() {
    console.log(this.state.sushi)
    return (
      <div className="app">
        <SushiContainer sushi={this.state.sushi} displayed={this.state.displayed}/>
        <Table />
      </div>
    );
  }
}

export default App;