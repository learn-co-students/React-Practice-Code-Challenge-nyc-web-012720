import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component {

  state = {
    eatenSushi: [],
    emptyPlates: []
  }

  renderSushi = (sushi) => {
    return sushi.map( s => {
      return <Sushi 
                key={s.id}
                sushi={s}
                eatSushi={this.eatSushi}
                eaten={this.state.eatenSushi}
              />
    })
  }
    
  eatSushi = (event, sushi) => {
   console.log(sushi)
    this.setState({
      eatenSushi: [...this.state.eatenSushi, sushi]
    })
   }
  

  render() {
    return (
      <Fragment>
        <div className="belt">
          {
            this.renderSushi(this.props.sushi)
          }
          <MoreButton />
        </div>
      </Fragment>
    )
  }
}


export default SushiContainer