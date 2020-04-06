import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {


  const renderSushi = () => {

    return props.sushis
      .slice(props.index, props.index + 4)
      .map(sushi => <Sushi key={sushi.id} sushi={sushi} eatSushi={props.eatSushi} eaten={props.eaten} budget={props.budget}/>)
  }

  return (
    <Fragment>
      <div className="belt">
        {
          renderSushi()
        }
        <MoreButton increaseIndex={props.increaseIndex}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer