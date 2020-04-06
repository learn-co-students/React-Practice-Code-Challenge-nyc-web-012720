import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          props.provideFourSushi().map(sushi => <Sushi sushi={sushi}/>)
        }
        <MoreButton advanceSushi={props.advanceSushi} />
      </div>
    </Fragment>
  )
}

export default SushiContainer