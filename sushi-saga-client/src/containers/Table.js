import React, { Fragment } from 'react'

const Table = (props) => {

  const renderPlates = (array) => {
    console.log(array)
    return array.map((x, index) => {
      return <div key={index} className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  const getMonies = (event) => {
    event.preventDefault();
    console.log(event.target.value)
    props.getMonies(event.target.value)
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${props.bankroll} remaining!
      </h1>
      <form onSubmit={getMonies}>
        <input type="number" name="moMoney"/>
      </form>
      <div className="table">
        <div className="stack">
          {
            renderPlates(props.plates)
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Table