import React from 'react';
import CartItem from '../CartItem/CartItem';
import './Cart.css'
const Cart = ({cart,deleteItemFromCart,openModal}) => {
    return (
        <div className='cart'>
            <div>
            {   
                cart.map(item => <CartItem key={item.id} deleteItemFromCart={deleteItemFromCart} item={item}></CartItem>)
            }
            </div>

            <div className='additional-cart-feature'>
                <div>
                    <div>
                        <button className='cart-special-btn' onClick={()=>openModal(cart)}>CHOOSE 1 FOR ME</button>
                    </div>
                    <div>
                        <button className='cart-special-btn' >CLEAR CART</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;