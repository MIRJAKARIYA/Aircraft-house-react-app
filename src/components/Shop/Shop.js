import React, { useEffect, useState } from 'react';
import AircraftContainer from '../AircraftContainer/AircraftContainer';
import Cart from '../Cart/Cart';
import './Shop.css';
const Shop = () => {
    const [aircrafts, setAircrafts] = useState([]);
    const [cart, setCart] = useState([])
    useEffect( ()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setAircrafts(data))
    },[]);

    const addToCart = () =>{

    }
    return (
        <div className='shop'>
            <AircraftContainer aircrafts={aircrafts}></AircraftContainer>
            <div className='cart-container'>
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Shop;