import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <h2>
        <Link to="/">DevFofoca</Link>
      </h2>
      <h4 className="bem-vindo">{`Seja bem-vindo, ${JSON.parse(localStorage.getItem('login'))}`}</h4>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Deslogar</Link>
        </li>
        <li>
          <Link to="/new" className="new-btn">
            Novo Post
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
