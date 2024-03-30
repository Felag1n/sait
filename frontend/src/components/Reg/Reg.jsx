// RegistrationForm.js
import React from 'react';

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // Добавьте здесь логику регистрации, например, отправку данных на ваш backend
    console.log('Отправка формы регистрации:', this.state);
  }

  render() {
    return (
      <div className="form-container sign-up">
        <form onSubmit={this.handleSubmit}>
          <h1>Создание аккаунта</h1>
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder="Имя" />
          <input type="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Email" />
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Пароль" />
          <input type="password" name="password2" value={this.state.password2} onChange={this.handleChange} placeholder="Повторите пароль" />
          <button type="submit">Зарегистрироваться</button>
        </form>
      </div>
    );
  }
}

export default RegistrationForm;

