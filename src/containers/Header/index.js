import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="wallet">Wallet</Link>
          </li>
          <li>
            <Link to="rates">Wallet Rates</Link>
          </li>
          <li>
            <Link to="details">WalletDetail</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;