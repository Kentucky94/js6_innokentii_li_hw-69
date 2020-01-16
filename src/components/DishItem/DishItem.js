import './DishItem.css';

import React from 'react';

const DishItem = (props) => {
  return (
    <div className='DishItem' onClick={() => props.addDish(props.name)}>
      <img src={props.image} alt=""/>
      <div className='DishItemInfo'>
        <h2>{props.name}</h2>
        <p><b>KGS</b> {props.price}</p>
      </div>
      <button>Add To Cart</button>
    </div>
  );
};

export default DishItem;