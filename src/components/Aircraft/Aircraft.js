import React from 'react';
import './Aircraft.css';
import { BsCart4 } from 'react-icons/bs';
const Aircraft = ({aircraft,addToCart}) => {
    const {name,id,price,image} = aircraft;

    return (
        <div className='aircraft'>
            <div>
                <img className='aircraft-image' src={image} alt="" />
            </div>
            <div>
                <p>Name: {name}</p>
                <p>Price: ${price}</p>
            </div>
            <button onClick={()=>addToCart(id)} className='add-to-cart-btn'>Add to cart <span><BsCart4></BsCart4></span></button>
        </div>
    );
};

export default Aircraft;