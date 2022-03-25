import React from 'react';
import './CartItem.css';
import { MdDelete } from 'react-icons/md';
const CartItem = ({item,deleteItemFromCart}) => {
    const {name,image,id} = item;
    return (
        <div className='cart-item'>
            <div className='item-name-img-container'>
                <img className='cart-item-img' src={image} alt="" />
                <p className='cart-item-name'>{name}</p>
            </div>
            <button onClick={()=>deleteItemFromCart(id)} className='delete-btn'><MdDelete></MdDelete></button>
        </div>
    );
};

export default CartItem;