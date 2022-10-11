import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="App-header">
      <h1>Header</h1>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/addCard">
        <button>Add card</button>
      </Link>
    </header>
  );
}

export default Header;
