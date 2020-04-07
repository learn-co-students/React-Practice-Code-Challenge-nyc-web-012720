import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
  state = {
    sushis: [],
    pageCount: 1,
    budget: 100,
    eaten: [],
    amount: 0
  };

  componentDidMount() {
    fetch(API)
      .then((response) => response.json())
      .then((sushis) =>
        this.setState({ sushis })
      );
  }

  moreButton = () => {
    if (this.state.pageCount > 96) {
      this.setState({ pageCount: 1 })
    } else { 
      this.setState({ pageCount: this.state.pageCount + 4 });
  }
  };

  eaten = (sushiObj) => {
    if (!this.state.eaten.includes(sushiObj.id) && this.state.budget >= sushiObj.price) {
      this.setState({
        eaten: [...this.state.eaten, sushiObj.id],
        budget: this.state.budget - sushiObj.price,
      });
      return true;
    } else {
      alert("Sorry, You Need More Money");
      return false;
    }
  };

  watchAmount = (event) => {
    this.setState({ amount: event.target.value })
  }

  addAmount = (event) => {
    event.preventDefault()
    this.setState({
      budget: this.state.budget + parseInt(this.state.amount), 
      amount: 0
    })
  }

  render() {
    console.log(this.state.eaten);
    return (
      <div className="app" >
        <div>
          <form onSubmit={event => this.addAmount(event)}>
            <label>
              Add Amount:
              <input value={this.state.amount} onChange={event => this.watchAmount(event)} type="text" name="amount" />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
        <SushiContainer
          sushis={this.state.sushis}
          pageCount={this.state.pageCount}
          moreButton={this.moreButton}
          eaten={this.eaten}
          eatenArray={this.state.eaten}
        />
        <Table
          budget={this.state.budget}
          eaten={this.state.eaten}
        />
      </div>
    );
  }
}

export default App;
