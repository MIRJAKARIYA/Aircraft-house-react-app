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

    const addToCart = (id) =>{
        const cartAircraft = aircrafts.find(aircraft => aircraft.id === id);
        const isExists = cart.find(item => item.id === id)
        if(cart.length < 4){
            if(!isExists){
                setCart([...cart, cartAircraft]);
            }
        }
        else{
            alert('cannot add more than 4 items')
        }
    }
    const deleteItemFromCart = (id) =>{
        const remainingCartItems = cart.filter(item => item.id !== id);
        setCart(remainingCartItems);
    }
    return (
        <div className='shop'>
            <AircraftContainer addToCart={addToCart} aircrafts={aircrafts}></AircraftContainer>
            <div className='cart-container'>
                <Cart cart={cart} deleteItemFromCart={deleteItemFromCart}></Cart>
            </div>
        </div>
    );
};

export default Shop;