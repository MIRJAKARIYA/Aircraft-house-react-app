import React from 'react';
import CartItem from '../CartItem/CartItem';
import './Cart.css'
const Cart = ({cart,deleteItemFromCart}) => {
    return (
        <div className='cart'>
            <div>
            {   
                cart.map(item => <CartItem key={item.id} deleteItemFromCart={deleteItemFromCart} item={item}></CartItem>)
            }
            </div>

            <div className='additional-cart-feature'>

            </div>
        </div>
    );
};

export default Cart;