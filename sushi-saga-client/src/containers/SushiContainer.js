import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import SushiList from '../components/SushiList'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        <SushiList API={props} />
        <MoreButton />
      </div>
    </Fragment>
  )
}

export default SushiContainer