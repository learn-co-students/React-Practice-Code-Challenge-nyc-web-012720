import React, { Component } from 'react'; 
import MoreButton from '../components/MoreButton'; 
import Sushi from '../components/Sushi'; 

class SushiContainer extends Component {
  renderSushi = () => {
    return (
      this.props.sushis.map(sushi =>
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

  render() {
    return (
      <div>
        <div className="belt">
        /* Render Sushi components here! */
          {this.renderSushi()}
          <MoreButton />
        </div>
      </div>
    )
  }
}

export default SushiContainer