import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  const renderSushi = () => {
    let filtered = props.sushis.filter(sushi => sushi.id < props.pageCount + 4 && sushi.id >= props.pageCount)
    return filtered.map(sushi => <Sushi key={sushi.id} sushi={sushi}/>)
  }

  return (
    <Fragment>
      <div className="belt">

        {console.log(renderSushi())}
        {
          renderSushi()
        }
        <MoreButton moreButton={props.moreButton}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer