import React from 'react';

export default function Display({ balls, strikes }) {
  return (
    <div className='container display'>
      <div className='balls'>Balls: {balls} </div>
      <div className='strikes'>Strikes: {strikes}</div>
    </div>
  );
}
