import React, { Fragment } from 'react'

const Sushi = (props) => {
  return (
    <div className="sushi">
      {/* here we pass in a callback function for the event handler */}
      <div className="plate" 
           onClick={() => props.handleEat(props.id)}>
        {/* If sushi has been eaten, do not show image */}
        {/* If not, show image */}
          {props.isEaten ? 
            null
          :
            <img src={props.img_url} width="100%" alt={props.name} />
        }
      </div>
      <h4 className="sushi-details">
        {props.name} - ${props.price}
      </h4>
    </div>
  )
}

export default Sushi; 