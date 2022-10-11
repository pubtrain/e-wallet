import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeActive, removeCard } from '../redux/cardSlice';

function Card({ cardName, cardNum, expireMonth, expireYear, cvc, vendor, id }) {
  const dispatch = useDispatch();
  return (
    <div className="card-component">
      <p>{cardName}</p>
      <p>{cardNum}</p>
      <p>
        {expireMonth}/{expireYear}
      </p>
      <p>{cvc}</p>
      <p>{vendor}</p>
      <button
        onClick={() => {
          dispatch(makeActive(id));
        }}
      >
        Make active
      </button>
      <button onClick={() => dispatch(removeCard(id))}>Remove card</button>
    </div>
  );
}

export default Card;
