import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component {

  state = {
    eaten: false,
    emptyPlates: []
  }

  renderSushi(sushi) {
    return sushi.map( s => {
      return <Sushi 
                key={s.id}
                sushi={s}
                eatSushi={this.eatSushi}
                eaten={this.state.eaten}
              />
    })
  }
    
  eatSushi = (event, id) => {
  //   console.log(id)
  //   console.log(event.target.src)
  //  event.target === id &&
  event.target.src &&
    this.setState({
      eaten: true
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