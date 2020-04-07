import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

const API = "http://localhost:3000/sushis";

class App extends Component {
  constructor() {
    super();
    this.state = {
      sushis: [],
      eatenSushis: [],
      budget: 100,
      wallet: "",
    };
  }

  componentDidMount() {
    fetch(API)
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({ sushis: data });
      });
  }

  handleEatenSushis = (id) => {
    const targetSushi = this.state.sushis.find((sushi) => sushi.id === id);

    let newSushis = this.state.sushis.map((sushi) => {
      if (sushi.id === id) {
        return { ...sushi, isEaten: true };
      } else {
        return sushi;
      }
    });

    if (
      !this.state.eatenSushis.includes(id) &&
      this.state.budget >= targetSushi.price
    ) {
      this.setState({
        eatenSushis: [...this.state.eatenSushis, id],
        budget: this.state.budget - targetSushi.price,
        sushis: newSushis,
      });
    }
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      budget: this.state.budget + parseInt(this.state.wallet, 10),
      wallet: "",
    });
  };

  form = () => {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Enter Amount:
            <input
              name="wallet"
              type="text"
              value={this.state.wallet}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  };

  render() {
    console.log(this.state.eatenSushis);
    return (
      <div className="app">
        {this.form()}
        <SushiContainer
          sushis={this.state.sushis}
          handleEatenSushis={this.handleEatenSushis}
        />
        <Table
          budget={this.state.budget}
          eatenSushis={this.state.eatenSushis}
        />
      </div>
    );
  }
}

export default App;
