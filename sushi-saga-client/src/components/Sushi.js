import React, { Component } from "react";

class Sushi extends Component {
  handleEating = () => {
    this.props.handleEatenSushis(this.props.sushi.id);
  };

  render() {
    return (
      <div className="sushi">
        <div className="plate" onClick={this.handleEating}>
          {this.props.sushi.isEaten ? null : (
            <img src={this.props.sushi.img_url} alt="sushi" width="100%" />
          )}
        </div>
        <h4 className="sushi-details">
          {this.props.sushi.name} - ${this.props.sushi.price}
        </h4>
      </div>
    );
  }
}

export default Sushi;
