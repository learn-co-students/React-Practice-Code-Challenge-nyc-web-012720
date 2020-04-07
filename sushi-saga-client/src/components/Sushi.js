import React from 'react'

const Sushi = (props) => {
  // console.log(props)
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={()=>props.handleClick(props.id)}>
        { props.eatenSushi.includes(props.id) ?
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

export default Sushi