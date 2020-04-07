import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  const renderSushi = () => {
    return props.sushis
    .filter(sushi => sushi.id < props.pageCount + 4 && sushi.id >= props.pageCount)
    .map(sushi => <Sushi eatenArray={props.eatenArray} eaten={props.eaten} key={sushi.id} sushi={sushi}/>)
  }

  return (
    <Fragment>
      <div className="belt">
        {renderSushi()}
        <MoreButton moreButton={props.moreButton}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer