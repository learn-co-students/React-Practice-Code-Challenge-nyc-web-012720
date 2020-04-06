import React, { Component } from "react";

class Sushi extends Component {
  state = {
    eaten: false,
  };

  handleEating = () => {
    this.setState({ eaten: true });
  };

  render() {
    return (
      <div className="sushi">
        <div className="plate" onClick={this.handleEating}>
          {this.state.eaten ? null : (
            <img src={this.props.sushi.img_url} width="100%" />
          )}
        </div>
        <h4 className="sushi-details">
          {this.props.sushi.name} - ${this.props.sushi.price}
        </h4>
      </div>
    );
  }
}

// const Sushi = (props) => {
//   return (
//   );
// };

export default Sushi;

// {/* Tell me if this sushi has been eaten! */

// false ? null : (
//   // <img src={/* Give me an image source! */} width="100%" />
// )}
