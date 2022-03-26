import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const {cart} = props;
    console.log(cart);


    const test = (min,max) =>{
        return Math.floor(Math.random()*(max-min +1))  + min;
    }
    const choose1ForMe = () =>{
        let index = test(0,cart.length-1);
        const tem = cart[index];
        alert("Please Buy "+tem.name);
        return tem;
    }

    return (
        <div className='cart'>
            <h4>Selected Books</h4>
            {
                cart.map((item) =>(
                    <h6 key={item.id}><img className='cart-img' src={item.img} alt="" />{item.name}</h6>
                    
                ))
            }
            <button onClick={choose1ForMe} className='cart-btn'>CHOOSE 1 FOR ME</button>
            <button className='cart-btn'>CHOOSE AGAIN</button>
        </div>
    );
};

export default Cart;