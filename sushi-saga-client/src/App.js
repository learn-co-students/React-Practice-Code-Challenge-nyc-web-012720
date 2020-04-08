import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import AddBudget from './components/AddBudget';
// Endpoint!
const API = 'http://localhost:4000/sushis';

class App extends Component {
  state = {
    sushis: [],
    budget: 100,
    eatenSushi: [],
    amount: '',
  };
  componentDidMount() {
    fetch(API)
      .then((response) => response.json())
      .then((sushis) => this.setState({ sushis }));
  }
  handleImage = (sushi) => {
    let findSushi = this.state.eatenSushi.includes(sushi.id);
    let afterBudget = this.state.budget - sushi.price;

    if (!findSushi && this.state.budget >= sushi.price) {
      this.setState({
        budget: afterBudget,
        eatenSushi: [...this.state.eatenSushi, sushi.id],
      });
    }
  };
  handleAddClick = (event) => {
    let add = parseInt(event.target.value);
    this.setState({ amount: add });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      budget: this.state.budget + this.state.amount,
      amount: '',
    });
  };
  render() {
    return (
      <div className='app'>
        <AddBudget
          handleAddClick={this.handleAddClick}
          budget={this.state.budget}
          handleSubmit={this.handleSubmit}
        />
        <SushiContainer
          sushis={this.state.sushis}
          handleImage={this.handleImage}
          eatenSushi={this.state.eatenSushi}
        />
        <Table budget={this.state.budget} eatenSushi={this.state.eatenSushi} />
      </div>
    );
  }
}

export default App;
