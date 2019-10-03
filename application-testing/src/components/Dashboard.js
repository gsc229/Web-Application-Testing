import React from 'react';
export const addStrike = currentStrikes => {
  if (currentStrikes >= 2) {
    return 0;
  } else return currentStrikes + 1;
};
export const addBall = currentBalls => {
  if (currentBalls >= 3) {
    return 0;
  } else return currentBalls + 1;
};

export const foulBall = currentStrikes => {
  if (currentStrikes >= 2) {
    return currentStrikes;
  } else {
    return currentStrikes + 1;
  }
};

export const hit = currentValue => {
  return currentValue - currentValue;
};

export default function DashBoard({ setStrikes, setBalls, strikes, balls }) {
  return (
    <div className='container dash-board'>
      <button onClick={() => setStrikes(addStrike(strikes))} className='strike'>
        Strike
      </button>
      <button onClick={() => setBalls(addBall(balls))} className='ball'>
        Ball
      </button>
      <button
        onClick={() => setStrikes(hit(strikes), setBalls(hit(balls)))}
        className='hit'
      >
        Hit
      </button>
      <button onClick={() => setStrikes(foulBall(strikes))} className='foul'>
        Foul
      </button>
    </div>
  );
}
