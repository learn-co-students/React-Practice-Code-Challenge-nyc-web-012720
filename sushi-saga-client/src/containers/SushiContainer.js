import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'; 
import Sushi from '../components/Sushi'; 

class SushiContainer extends React.Component {
  state = {
    startIndex: 0
  }

  renderSushi = () => {
    return (
      this.props.sushis.slice(this.state.startIndex, this.state.startIndex + 4).map(sushi =>
        <Sushi 
          key={sushi.id}
          {...sushi}
          eaten={this.props.sushi}
          handleEat={this.props.handleEat}
        />
      )
    )
  }

  // when "More" button is clicked, change showMore to true
  // if showMore = true, render next 4 sushi (i.e. now we want to show index 4-7)
  // (0-3), (4-7), etc. => how do we change the start and end index of what is shown?
  handleMoreClick = () => {
    let newIndex = this.state.startIndex + 4
    if (newIndex >= this.props.sushis.length) {
      newIndex = 0
    }
    this.setState({
      startIndex: newIndex 
    })
  }

  render() {
    return (
      <Fragment>
        <div className="belt">
        {/* Render Sushi components here! */ }
          {this.renderSushi()}
          <MoreButton handleMoreClick={this.handleMoreClick} />
        </div>
        </Fragment>
    )
  }
}

export default SushiContainer; 