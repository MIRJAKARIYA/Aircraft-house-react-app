import React from 'react';
import Aircraft from '../Aircraft/Aircraft';
import './AircraftContainer.css'

const AircraftContainer = ({aircrafts,addToCart}) => {
    return (
        <div className='aircraft-container'>
            {
                aircrafts.map(aircraft => <Aircraft addToCart={addToCart} key={aircraft.id} aircraft={aircraft}></Aircraft>)
            }
        </div>
    );
};

export default AircraftContainer;