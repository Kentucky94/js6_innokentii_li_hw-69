import './CartItem.css';

import React from 'react';

const CartItem = props => {
  return (
    <div
      className='CartItem'
      onClick={() => props.remove(props.name)}
      style={{
        display: props.qty > 0 ? 'flex' : 'none',
      }}
    >
      <b>{props.name}</b><span> X {props.qty}</span><b>{props.price}</b>
    </div>
  );
};

export default CartItem;