import React from 'react';
import './CartItem.css';
const CartItem = ({item}) => {
    return (
        <div className='cart-item'>
            <div className='item-name-img-container'>
                <img className='cart-item-img' src={item.image} alt="" />
                <p>{item.name}</p>
            </div>
            <button>del</button>
        </div>
    );
};

export default CartItem;