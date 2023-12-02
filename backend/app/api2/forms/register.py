from wtforms import StringField, PasswordField, EmailField, SubmitField
from wtforms.validators import InputRequired, EqualTo, Length
from flask_wtf import FlaskForm

class RegistrationForm(FlaskForm):

    MIN_PASSWORD_LENGTH = 8

    name = StringField(
        'name', 
        [InputRequired('Имя обязательно')], 
        render_kw={"placeholder": "Name"}
    )
    email = EmailField(
        'email', 
        [InputRequired('Почта обязательна')], 
        render_kw={"placeholder": "Email"}
    )
    password = PasswordField(
        'password', 
        [Length(MIN_PASSWORD_LENGTH, -1, f'Не менее {MIN_PASSWORD_LENGTH} символов')], 
        render_kw={"placeholder": "Password"}
    )
    password2 = PasswordField(
        'password2',
        [EqualTo('password', 'Пароли не совпадают')], 
        render_kw={"placeholder": "Repeat password"}
    )
    submit = SubmitField(
        'submit',
        render_kw={"value": "Регистрация"}
    )
