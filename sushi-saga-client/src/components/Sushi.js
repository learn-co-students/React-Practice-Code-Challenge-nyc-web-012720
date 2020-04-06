import React, { Fragment } from 'react'

class Sushi extends React.Component{

  state = {
    eaten: false
  }

  handleClick = () =>{
    this.setState({eaten: true})
  }

  render() {
    const sushi = this.props.props
    {console.log("Sushi.js sushi: ", sushi)}
    return (
      <Fragment>
      <div className="sushi">
        <div className="plate" onClick={this.handleClick}>
          { this.state.eaten ? null : <img src={sushi.img_url} width="100%" />}
        </div>
        <h4 className="sushi-details">
          {sushi.name} - ${sushi.price}
        </h4>
      </div>
    </Fragment>
    )
  }
}

export default Sushi