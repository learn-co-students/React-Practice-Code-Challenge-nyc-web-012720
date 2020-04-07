import React, { Component } from "react";
import MoreButton from "../components/MoreButton";
import Sushi from "../components/Sushi";

class SushiContainer extends Component {
  state = {
    startIndex: 0,
  };

  renderSushis = () => {
    let sushisToRender = this.props.sushis;
    return sushisToRender
      .slice(this.state.startIndex, this.state.startIndex + 4)
      .map((sushi) => {
        return (
          <Sushi
            sushi={sushi}
            key={sushi.id}
            handleEatenSushis={this.props.handleEatenSushis}
          />
        );
      });
  };

  handleMoreButton = () => {
    let newIndex = this.state.startIndex + 4;
    if (newIndex >= this.props.sushis.length) {
      newIndex = 0;
    }
    this.setState({ startIndex: newIndex });
  };
  // this.setState({ startIndex: newIndex >= this.props.sushis.length ? 0 : newIndex  })

  render() {
    console.log(this.state.startIndex);
    return (
      <div>
        <div className="belt">
          {this.renderSushis()}
          <MoreButton handleMoreButton={this.handleMoreButton} />
        </div>
      </div>
    );
  }
}

export default SushiContainer;
