import React from 'react';
import './Card.css';
export const Card = props => (
    <div className='card-container'>
        <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=100x300`} />
        <h1> {props.monster.name} </h1>
        <p> {props.monster.email} </p>
    </div>
);

