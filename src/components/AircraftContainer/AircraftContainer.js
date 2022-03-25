import React from 'react';
import Aircraft from '../Aircraft/Aircraft';

const AircraftContainer = ({aircrafts}) => {
    return (
        <div>
            {
                aircrafts.map(aircraft => <Aircraft aircraft={aircraft}></Aircraft>)
            }
        </div>
    );
};

export default AircraftContainer;