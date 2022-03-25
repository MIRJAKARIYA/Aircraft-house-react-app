import React from 'react';
import './Aircraft.css'
const Aircraft = ({aircraft}) => {
    const {name,id,price} = aircraft;
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};

export default Aircraft;