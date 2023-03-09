import React from 'react'
import { Link } from 'react-router-dom';
import './style.css';

const Header = () => {
  return (
    <div>
      <nav className="nav">
        <ul className="navList">
          <li className="navListElement">
            <Link to="/">Home</Link>
          </li>
          <li className="navListElement">
            <Link to="wallet">Wallet</Link>
          </li>
          <li className="navListElement">
            <Link to="rates">Wallet Rates</Link>
          </li>
          <li className="navListElement">
            <Link to="details">WalletDetail</Link>
          </li>
          <li className="navListElement">
            <Link to="profile">Profile</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;