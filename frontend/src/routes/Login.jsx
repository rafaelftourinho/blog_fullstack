import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [user, setUser] = useState();
  const navigate = useNavigate();

  function handleSubmit() {
    localStorage.setItem('login', JSON.stringify(user));
    navigate('/');
  }

  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="form">
        <div className="name">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="name">
            NOME
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Digite seu usuário"
            onChange={({ target }) => setUser(target.value)}
          />
        </div>
        <button type="submit">Logar</button>
      </form>
    </div>
  );
}

export default Login;
