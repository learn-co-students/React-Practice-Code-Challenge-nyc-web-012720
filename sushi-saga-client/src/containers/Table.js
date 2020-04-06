import React, { Fragment } from 'react'

const Table = (props) => {

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  const renderAmountSpent = () => {
    return props.eaten.map(sushi => sushi.price).reduce((a,b)=> a+b,0) 
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have spent ${ renderAmountSpent() } !
      </h1>
      <div className="table">
        <div className="stack">
          {
            /* 
               renderPlates takes an array 
               and renders an empty plate
               for every element in the array
            */
            renderPlates(props.eaten)
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Table