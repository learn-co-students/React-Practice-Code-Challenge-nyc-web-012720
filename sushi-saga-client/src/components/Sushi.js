import React, { Fragment } from 'react';

const Sushi = (props) => {
  const { name, img_url, price } = props.sushi;
  const hasEatSushi = () => {
    let target = props.eatenSushi.includes(props.sushi.id);
    if (target) {
      return null;
    }
    return <img src={img_url} width='100%' />;
  };
  return (
    <div className='sushi'>
      <div
        className='plate'
        onClick={(event) => props.handleImage(props.sushi)}>
        {hasEatSushi()}
      </div>
      <h4 className='sushi-details'>
        {name} - ${price}
      </h4>
    </div>
  );
};

export default Sushi;
