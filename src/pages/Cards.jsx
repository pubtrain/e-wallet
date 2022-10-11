import React from 'react';
import Card from '../components/Card';
import { useSelector } from 'react-redux';

function Cards() {
  const { cards } = useSelector((state) => state.user);
  return (
    <main>
      <h2>Cards!</h2>
      <div className="card-card">
        <h2>Active card</h2>
        {cards &&
          cards.map((card, i) => {
            if (card.active) {
              return <Card {...card} key={i} />;
            }
          })}
        <h2>Inactive card</h2>
        {cards &&
          cards.map((card, i) => {
            if (!card.active) {
              return <Card {...card} key={i} />;
            }
          })}
      </div>
    </main>
  );
}

export default Cards;
