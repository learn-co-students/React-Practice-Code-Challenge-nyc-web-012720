import React, { Fragment } from 'react'

const Sushi = (props) => {
  const sushi = props.sushi

  const eat = () => {
    ((props.budget > sushi.price)) ? props.eatSushi(sushi) : console.log('you do not have enough money')
    
  }

  return (
    <div className="sushi">
      <div className="plate" 
           onClick={() => eat()}>
        { 
          /* Tell me if this sushi has been eaten! */ 
          props.eaten.find(s => s === sushi.id) ?
            console.log('This sushi has been eaten!')
          :
            <img src={sushi.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  )
}

export default Sushi