import React from 'react';
import './Product.css';
const Product = (props) => {
    const {handleAddToCart}= props;
 const {img, name, price}= props.product;
 
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
            <p className='product-name'>{name}</p>
            <p>Price: ${price}</p>
            </div>
            <button onClick={()=> handleAddToCart(props.product)} className='btn-cart'>
                <p>Add to Cart</p>
            </button>
        </div>
    );
};

export default Product;