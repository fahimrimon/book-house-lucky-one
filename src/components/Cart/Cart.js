import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const {cart} = props;
    console.log(cart);

    return (
        <div className='cart'>
            <h4>Selected Books</h4>
            {
                cart.map((item) =>(
                    <h6 key={item.id}>{item.name}</h6>
                ))
            }
        </div>
    );
};

export default Cart;