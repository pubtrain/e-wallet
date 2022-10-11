import React, { useState } from 'react';
import { addCard } from '../redux/cardSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function AddCard() {
  const dispatch = useDispatch();
  const { latestId } = useSelector((state) => state.user);
  const [card, setCard] = useState({
    cardName: '',
    cardNum: '',
    expireMonth: '',
    expireYear: '',
    cvc: '',
    vendor: '',
  });

  const cardHandler = (update, e) => {
    const updatedCard = { ...card };
    updatedCard[update] = e.target.value;
    setCard(updatedCard);
  };

  const sendBtn = (e) => {
    e.preventDefault();

    let cardName = document.querySelector('#cardname').value;
    let cardNum = document.querySelector('#cardnumber').value;
    let expMonth = document.querySelector('#month').value;
    let expYear = document.querySelector('#year').value;
    let cvcNum = document.querySelector('#cvc').value;
    let vendorName = document.querySelector('#vendor-select').value;

    let newObject = {
      cardName: cardName,
      cardNum: cardNum,
      expireMonth: expMonth,
      expireYear: expYear,
      cvc: cvcNum,
      vendor: vendorName,
      id: latestId,
    };

    dispatch(addCard(newObject));
  };
  return (
    <main>
      <h2>Your card:</h2>
      <p>Name: {card.cardName}</p>
      <p>Cardnumber: {card.cardNum}</p>
      <p>
        Expire MM/YY: {card.expireMonth}/{card.expireYear}
      </p>
      <p>CVC: {card.cvc}</p>
      <p>Vendor: {card.vendor}</p>
      <h2>Add card!</h2>
      <form onSubmit={sendBtn}>
        <label htmlFor="cardname">
          Cardholder:
          <input
            type="text"
            placeholder="Cardholder"
            id="cardname"
            onChange={(e) => cardHandler('cardName', e)}
          ></input>
        </label>
        <label htmlFor="cardnumber">
          Cardnumber:
          <input
            type="number"
            placeholder="Cardnumber"
            id="cardnumber"
            onChange={(e) => cardHandler('cardNum', e)}
          ></input>
        </label>
        <label htmlFor="month year">
          MM/YY:
          <input
            type="number"
            id="month"
            placeholder="MM"
            onChange={(e) => cardHandler('expireMonth', e)}
          ></input>
          <input
            type="number"
            id="year"
            placeholder="YY"
            onChange={(e) => cardHandler('expireYear', e)}
          ></input>
        </label>
        <label htmlFor="cvc">
          CVC2:
          <input
            type="number"
            id="cvc"
            placeholder="CVC2"
            onChange={(e) => cardHandler('cvc', e)}
          ></input>
        </label>
        <label htmlFor="vendor-select">
          Vendor:
          <select id="vendor-select" onChange={(e) => cardHandler('vendor', e)}>
            <option value="MasterCard">MasterCard</option>
            <option value="Visa">Visa</option>
            <option value="CryptoCard">CryptoCard</option>
            <option value="AMEX">American Express</option>
          </select>
        </label>
        <button type="submit">Send</button>
      </form>
    </main>
  );
}
