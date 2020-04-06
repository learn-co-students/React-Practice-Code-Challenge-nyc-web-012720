import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis/"

class App extends Component {

  state = {
    sushis: [],
    amount: 50,
    page: 1,
    formAmount: ""
  }

  componentDidMount(){
    fetch(API)
    .then(response => response.json())
    .then(sushis => this.setState({sushis}))
  }

  eatSushi = (sushiId) => {
    let sushiCopy = [...this.state.sushis]
    let selectedSushi = sushiCopy.find(sushi => sushi.id === sushiId)
    if (!selectedSushi.eaten && this.state.amount >= selectedSushi.price) {
      selectedSushi.eaten = true
      this.setState({
        sushis: sushiCopy,
        amount: this.state.amount - selectedSushi.price
      })
    } if (!selectedSushi.eaten && this.state.amount < selectedSushi.price) {
      alert("You don't have enough money")
    }
  }

  turnPage = () => {
    if (Math.ceil(this.state.sushis.length / 4) <= this.state.page) {
      this.setState({
        page: 1
      })
    } else if (Math.ceil(this.state.sushis.length / 4 > this.state.page))
    {
      this.setState({
        page: this.state.page +1 
      })
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      amount: this.state.amount + parseInt(this.state.formAmount, 10),
      formAmount: 0
    })
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  render() {
    let endIndex = this.state.page * 4
    let startIndex = endIndex - 4
    let sushiCopy = [...this.state.sushis]
    let displaySushis = sushiCopy.slice(startIndex, endIndex)
        return (
      <div className="app">
        <button onClick={() => console.log(this.state)}>See State</button>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label>Add Money</label>
          <input type="text" name="formAmount" value={this.state.formAmount} onChange={event => this.handleChange(event)}></input>
          <input type="submit" value="submit" />
        </form>
        <SushiContainer sushis={displaySushis} eatSushi={this.eatSushi} turnPage={this.turnPage}/>
        <Table amount={this.state.amount} sushis={sushiCopy}/>
      </div>
    );
  }
}

export default App;