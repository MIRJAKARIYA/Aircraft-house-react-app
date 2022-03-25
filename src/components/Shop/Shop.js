import React, { useEffect, useState } from 'react';
import AircraftContainer from '../AircraftContainer/AircraftContainer';
import Cart from '../Cart/Cart';
import './Shop.css';
const Shop = () => {
    const [aircrafts, setAircrafts] = useState([]);
    useEffect( ()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setAircrafts(data))
    },[]);
    console.log(aircrafts)
    return (
        <div className='shop'>
            <AircraftContainer aircrafts={aircrafts}></AircraftContainer>
            <Cart></Cart>
        </div>
    );
};

export default Shop;