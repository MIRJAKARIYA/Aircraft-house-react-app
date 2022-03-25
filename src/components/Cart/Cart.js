import React from 'react';
import CartItem from '../CartItem/CartItem';
import './Cart.css'
const Cart = ({cart}) => {
    return (
        <div className='cart'>
            <div>
            {   
                cart.map(item => <CartItem item={item}></CartItem>)
            }
            </div>

            <div>
                
            </div>
        </div>
    );
};

export default Cart;