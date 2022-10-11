import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="App-header">
      <h1>E-WALLET</h1>
      <div className="btn-container">
        <Link to="/">
          <button className="btn">Home</button>
        </Link>
        <Link to="/addCard">
          <button className="btn">Add card</button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
