import styles from './styles/LogReg.module.css'
import React, { useState } from 'react';

function LoginForm(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
    // Добавьте здесь логику входа, например, отправку данных на ваш backend
    console.log('Отправка формы входа:', this.state);
  }

  return (
    <div className="form-container sign-in">
      <form onSubmit={handleSubmit}>
        <h1>Вход</h1>
        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Пароль" />
        <button type="submit">Войти</button>
      </form>
    </div>
  );
}

export default LoginForm;
