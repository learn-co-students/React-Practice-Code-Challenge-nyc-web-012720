import React, { Fragment } from 'react'

const Table = (props) => {

  const renderPlates = (array) => {
    if (array) {
      return array.map((x, index) => {
        return <div key={x.id} className="empty-plate" style={{ top: -7 * index }}/>
      })
    } else {
      return null
    }
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${props.amount} remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {
            renderPlates(props.sushis.filter(sushi => sushi.eaten))
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Table