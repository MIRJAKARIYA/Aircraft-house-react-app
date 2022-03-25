import React from 'react';
import './Aircraft.css'
const Aircraft = ({aircraft}) => {
    console.log(aircraft)
    const {name,id,price,image} = aircraft;

    return (
        <div className='aircraft'>
            <div>
                <img className='aircraft-image' src={image} alt="" />
            </div>
            <div>
                <p>Name: {name}</p>
                <p>Price: {price}</p>
            </div>
            <button className='add-to-cart-btn'>Add to cart</button>
        </div>
    );
};

export default Aircraft;