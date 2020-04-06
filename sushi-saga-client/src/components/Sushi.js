import React, { Fragment } from 'react'


class Sushi extends React.Component {
  
  state = {
    eaten: false
  }
  
  handleEatenClick = () => {
    this.setState({eaten: true})
  }

  render() {
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={this.handleEatenClick}>
        { 
          this.state.eaten ? 
            null
          :
            <img src={this.props.sushi.img_url} alt="sushi" width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {this.props.sushi.name} - ${this.props.sushi.price}
      </h4>
    </div>
  )
}
}

export default Sushi