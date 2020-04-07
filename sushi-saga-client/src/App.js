import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";
import AddBalanceForm from "./components/AddBalanceForm";

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
	state = {
		sushi: [],
		eatenSushi: [],
    budget: 100,
    balanceInput: 0
	};

	componentDidMount() {
		fetch(API)
			.then((resp) => resp.json())
			.then((sushi) => this.getSushi(sushi));
	}

	getSushi = (sushi) => {
		this.setState({ sushi: sushi });
	};

	handleClick = (id) => {
		if (this.state.eatenSushi.includes(id)) {
			alert("you already ate this");
		} if (this.state.budget <= 5 ) {
			alert("you dont havzzz moneyyy");
		} else {
			let selectedSushi = this.state.sushi.filter((sushi) => sushi.id === id);
			console.log(selectedSushi);
			this.setState({
				eatenSushi: [...this.state.eatenSushi, id],
				budget: this.state.budget - parseInt(selectedSushi[0].price),
			});
		}
  };
  
  handleBalanceInput = (event) => {
    this.setState({balanceInput: event.target.value})
  }
  
  handleBalanceSubmit = (event) => {
    event.preventDefault()
    this.setState({budget: this.state.budget + parseInt(this.state.balanceInput),
                    balanceInput: ""
    })
  }

	render() {
		// console.log(this.state.eanSushi);
		return (
			<div className="app">
        <AddBalanceForm
          handleBalanceInput={this.handleBalanceInput}
          handleBalanceSubmit={this.handleBalanceSubmit}
          balanceInput={this.state.balanceInput}
        />
				<SushiContainer
					sushi={this.state.sushi}
					eatenSushi={this.state.eatenSushi}
					handleClick={this.handleClick}
				/>
				<Table eatenSushi={this.state.eatenSushi} budget={this.state.budget} />
			</div>
		);
	}
}

export default App;
