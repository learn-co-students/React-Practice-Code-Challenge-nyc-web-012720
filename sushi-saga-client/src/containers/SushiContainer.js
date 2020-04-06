import React, { Component } from 'react'; 
import MoreButton from '../components/MoreButton'; 
import Sushi from '../components/Sushi'; 

class SushiContainer extends Component {
  state = {
    sushiToShow: 4,
    showMore: false
  }

  renderSushi = () => {
    return (
      this.props.sushis.slice(0, this.state.sushiToShow).map(sushi =>
        <Sushi
          key={sushi.id}
          name={sushi.name}
          image={sushi.img_url}
          price={sushi.price}
          createdAt={sushi.created_at}
        />
      )
    )
  }

  // when "More" button is clicked, change showMore to true
  // if showMore = true, render next 4 sushi (i.e. now we want to show index 4-7)
  // (0-3), (4-7), etc. 
  handleMoreClick = () => {
    this.setState({
      showMore: true
    })
  }

  render() {
    return (
      <div>
        <div className="belt">
        {/* Render Sushi components here! */ }
          {this.renderSushi()}
          <MoreButton handleMoreClick={this.handleMoreClick} />
        </div>
      </div>
    )
  }
}

export default SushiContainer; 