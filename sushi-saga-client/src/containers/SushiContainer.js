import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  console.log(props.sushis)
  const renderSushi = () => {
    return props.sushis.map(sushi => <Sushi sushi={sushi} />)
  }
  return (
    <Fragment>
      <div className="belt">
        {

          renderSushi()
          /* 
             Render Sushi components here!
          */
        }
        <MoreButton />
      </div>
    </Fragment>
  )
}

export default SushiContainer