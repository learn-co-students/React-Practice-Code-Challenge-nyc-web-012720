import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component {

  state = {
    startIndex: 0,
    // eatenSushi: [],
    // emptyPlates: []
  }

  changeIndex = () => {
    let newIndex = this.state.startIndex + 4
    this.setState({ startIndex: newIndex >= this.props.sushi.length ? 0 : newIndex })
  }

  renderSushi = (sushi) => {
    return sushi.map( s => {
      return <Sushi 
                key={s.id}
                sushi={s}
                // eatSushi={this.eatSushi}
                handleEat={this.props.handleEat}
                eaten={this.props.eaten}
              />
    })
  }
    
  // eatSushi = (event, sushi) => {
  //  console.log(sushi)
  //   this.setState({
  //     eatenSushi: [...this.state.eatenSushi, sushi]
  //   })
  //  }
  

  render() {
    let displaySushi = this.props.sushi.slice(this.state.startIndex, this.state.startIndex + 4)
    console.log(this.state.startIndex)
    return (
      <Fragment>
        <div className="belt">
          {
            this.renderSushi(displaySushi)
          }
          <MoreButton changeIndex={this.changeIndex}/>
        </div>
      </Fragment>
    )
  }
}


export default SushiContainer