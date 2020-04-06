import React from 'react'

// {
//   "id": 1,
//   "name": "Maguro Magic",
//   "img_url": "./sushi/maguro.png",
//   "price": 20,
//   "created_at": "2018-07-27T18:53:16.241Z"
// },

const Sushi = ({sushi, eatSushi, eaten}) => {
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={() => eatSushi(sushi)}>
        { 
          /* Tell me if this sushi has been eaten! */ 
          eaten ?
            null
          :
            <img src={sushi.img_url} alt={sushi.name} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  )
}

export default Sushi