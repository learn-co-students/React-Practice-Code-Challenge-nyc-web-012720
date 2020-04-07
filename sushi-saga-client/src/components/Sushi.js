import React, { Fragment, Component } from 'react'

const Sushi = (props) => {

  return (
    <div className="sushi">
      <div className="plate" onClick={() => props.eaten(props.sushi)} >
        {props.eatenArray.includes(props.sushi.id) ? null : <img src={props.sushi.img_url} width="100%" />}
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  )
}

export default Sushi