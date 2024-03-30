
import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // Добавьте здесь логику входа, например, отправку данных на ваш backend
    console.log('Отправка формы входа:', this.state);
  }

  render() {
    return (
      <div className="form-container sign-in">
        <form onSubmit={this.handleSubmit}>
          <h1>Вход</h1>
          <input type="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Email" />
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Пароль" />
          <button type="submit">Войти</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
