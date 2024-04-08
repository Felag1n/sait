

import React, { useState } from 'react';

function RegistrationForm(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'password2':
        setPassword2(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Добавьте здесь логику регистрации, например, отправку данных на ваш backend
    console.log('Отправка формы регистрации:', { name, email, password, password2 });
  };

  return (
    <div className="form-container sign-up">
      <form onSubmit={handleSubmit}>
        <h1>Создание аккаунта</h1>
        <input type="text" name="name" value={name} onChange={handleChange} placeholder="Имя" />
        <input type="email" name="email" value={email} onChange={handleChange} placeholder="Email" />
        <input type="password" name="password" value={password} onChange={handleChange} placeholder="Пароль" />
        <input type="password" name="password2" value={password2} onChange={handleChange} placeholder="Повторите пароль" />
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
