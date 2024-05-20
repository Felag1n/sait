import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Reg.css';
import axios from 'axios';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const usernameRegex = /^[a-zA-Z0-9]{5,}$/; // Имя пользователя должно содержать не менее 5 символов и содержать только буквы и цифры
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/; // Пароль должен содержать не менее восьми символов, минимум одну заглавную букву, одну строчную букву и одну цифру
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Простая валидация электронной почты
  const phoneNumberRegex = /^\d{10}$/; // Номер телефона должен содержать 10 цифр

  const isUsernameValid = usernameRegex.test(username);
  const isPasswordValid = passwordRegex.test(password);
  const isPasswordsMatch = password === confirmPassword;
  const isEmailValid = emailRegex.test(email);
  const isPhoneNumberValid = phoneNumberRegex.test(phoneNumber);
  const isFormValid = isUsernameValid && isPasswordsMatch && isEmailValid && isPhoneNumberValid && agree;

  const handleChange = () => {
    setAgree(!agree);
    if (!agree) setError('');
  };

  async function onSubmit(event) {
    event.preventDefault();

    if (!isFormValid) {
      setError('Ошибка валидации');
      return;
    }

    try {
      console.log('Sending request to server...');
      const response = await axios.post("http://localhost:1337/api/auth/local/register", {
        email,
        username,
        password,
      });

      console.log('Response from server:', response);

      if (response.status !== 200) {
        setError('Ошибка на сервере');
        return;
      }

      const token = response.data.jwt;

      localStorage.setItem('token', token);
      localStorage.setItem('username', username);

      navigate('/');
    } catch (error) {
      setError('Ошибка при регистрации');
      console.error('Error during registration:', error);
    }
  }

  return (
    <div className="container">
      <h1>Регистрация</h1>
      <form onSubmit={onSubmit}>
        <input 
          type="text" 
          placeholder='Имя пользователя' 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />
        {username && !isUsernameValid && <p>Имя пользователя должно содержать не менее 5 символов и содержать только буквы и цифры</p>}

        <input 
          type="password" 
          placeholder='Пароль' 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        {password && !isPasswordValid && <p>Пароль должен содержать не менее восьми символов, минимум одну заглавную букву, одну строчную букву и одну цифру</p>}

        <input 
          type="password" 
          placeholder='Повторите пароль' 
          value={confirmPassword} 
          onChange={(e) => setConfirmPassword(e.target.value)} 
        />
        {confirmPassword && !isPasswordsMatch && <p>Пароли не совпадают</p>}

        <input 
          type="email" 
          placeholder='Электронная почта' 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        {email && !isEmailValid && <p>Введите корректный адрес электронной почты</p>}

        <input 
          type="tel" 
          placeholder='Номер телефона' 
          value={phoneNumber} 
          onChange={(e) => setPhoneNumber(e.target.value)} 
        />
        {phoneNumber && !isPhoneNumberValid && <p>Номер телефона должен содержать 10 цифр</p>}

        <div className="terms">
          <input 
            type="checkbox" 
            id="cbx2" 
            style={{ display: 'none' }} 
            checked={agree} 
            onChange={handleChange} 
          />
          <label htmlFor="cbx2" className="check">
            <svg width="18px" height="18px" viewBox="0 0 18 18">
              <path d="M 1 9 L 1 9 c 0 -5 3 -8 8 -8 L 9 1 C 14 1 17 5 17 9 L 17 9 c 0 4 -4 8 -8 8 L 9 17 C 5 17 1 14 1 9 L 1 9 Z"></path>
              <polyline points="1 9 7 14 15 4"></polyline>
            </svg>
          </label>
          <label htmlFor="cbx2">Я согласен с <a href="#">условиями и положениями</a></label>
        </div>

        {error && <p className="error">{error}</p>}

        <button type="submit" disabled={!isFormValid}>Зарегистрироваться</button>
      </form>

      <div className="member">
        Уже есть аккаунт? <Link to='/login'>Войти</Link>
      </div>
    </div>
  );
}

export default SignUp;
