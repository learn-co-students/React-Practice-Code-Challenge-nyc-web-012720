import React, { Fragment, Component } from 'react'

class Sushi extends Component {
  
  state = {
    wasEaten: false
  }

  wasEaten = () => {
    this.setState({
      wasEaten: true
    })
    this.props.piecesEaten()
  }

  render() {
    return (
      <div className="sushi">
        <div className="plate" onClick={this.wasEaten} >
          {this.state.wasEaten ? null : <img src={this.props.sushi.img_url} width="100%" />}
        </div>
        <h4 className="sushi-details">
          {this.props.sushi.name} - ${this.props.sushi.price}
        </h4>
      </div>
    )
  }
}

export default Sushi