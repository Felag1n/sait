import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginIn.css';
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    async function onSubmit(event) {
        event.preventDefault();

        try {
            const response = await axios.post("http://localhost:1337/api/auth/local", {
                identifier: username,
                password,
            });

            if (response.status !== 200) {
                setError("Ошибка сервера");
                return;
            }

            const token = response.data.jwt;

            
            localStorage.setItem('token', token);
            localStorage.setItem('username', username);

            
            window.location.href = '/';
        } catch (error) {
            console.error(error);
            if (error.response && error.response.data) {
             
                setError(error.response.data.message[0].messages[0].message);
            } else {
              
                setError("Вход не удался");
            }
        }
    }

    return (
        <div className="container">
            <h1>Вход</h1>
            <form onSubmit={onSubmit}>
                <input value={username} onChange={(event) => setUsername(event.target.value)} type="text" placeholder='Имя пользователя' />
                <input value={password} onChange={(event) => setPassword(event.target.value)} type="password" placeholder='Пароль' />
                <button>Войти</button>
                {error && <p className="error">{error}</p>}
            </form>
            <div className="member">
                Нет аккаунта? <Link to='/register'>Зарегистрируйтесь</Link>
            </div>
        </div>
    );
}

export default Login;