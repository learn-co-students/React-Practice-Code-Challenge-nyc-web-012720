import React, { Fragment } from 'react'

const Sushi = (props) => {
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={(event) => props.eatSushi(props.id)}>
        {
          /* Tell me if this sushi has been eaten! */ 
          false ?
            null
          :
            <img src={props.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.name} - ${props.price}
      </h4>
    </div>
  )
}

export default Sushi