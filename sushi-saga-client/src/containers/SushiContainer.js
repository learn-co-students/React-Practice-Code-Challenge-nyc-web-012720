import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  displayedSushi = () => {

  }
  
  handleClick = () => {
    this.setState({
      displayed: 
    })
  }

  return (
    <Fragment>
      <div className="belt">
        {
          props.sushi.map(sushi => <Sushi sushi={sushi} key={sushi.id} displayed={props.displayed}/>)
        }
        <MoreButton handleClick={props.handleClick}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer