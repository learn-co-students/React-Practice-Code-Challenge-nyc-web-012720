import React, { Component } from "react";
import MoreButton from "../components/MoreButton";
import Sushi from "../components/Sushi";

class SushiContainer extends Component {
  state = {
    startIndex: 0,
    eaten: false,
  };

  renderSushis = () => {
    let sushisToRender = this.props.sushis;
    return sushisToRender
      .slice(this.state.startIndex, this.state.startIndex + 4)
      .map((sushi) => {
        return <Sushi sushi={sushi} key={sushi.id} eaten={this.state.eaten} />;
      });
  };

  handleMoreButton = () => {
    this.setState({ startIndex: this.state.startIndex + 4 });
  };

  render() {
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

// const SushiContainer = (props) => {
//   return (
//     <Fragment>
//       <div className="belt">
//         {
//           /*
//              Render Sushi components here!
//           */
//         }
//         <MoreButton />
//       </div>
//     </Fragment>
//   )
// }
