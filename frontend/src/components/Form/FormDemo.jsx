import React from 'react';
import * as Form from '@radix-ui/react-form';
import './Form.css';

const FormDemo = () => (
  <Form.Root className="FormRoot" action="https://formsubmit.co/ec12345ec@yandex.ru" method="POST">
    <input type="hidden" name="_subject" value="Message From Website" />
    <input type="hidden" name="_template" value="box" />
    <input type="hidden" name="_captcha" value="false" />
    <input type="hidden" name="_next" value="" className="location-after-submit" />

    <Form.Field className="FormField" name="name">
      <div className="FormFieldHeader">
        <Form.Label className="FormLabel">Игровой никнейм (или Ваше имя)</Form.Label>
        <Form.Message className="FormMessage" match="valueMissing">
          Пожалуйста, введите свое имя
        </Form.Message>
      </div>
      <Form.Control asChild>
        <input className="Input" type="text" required placeholder="Example" />
      </Form.Control>
    </Form.Field>

    <Form.Field className="FormField" name="email">
      <div className="FormFieldHeader">
        <Form.Label className="FormLabel">Ваша почта</Form.Label>
        <Form.Message className="FormMessage" match="valueMissing">
          Пожалуйста, введите свой email
        </Form.Message>
        <Form.Message className="FormMessage" match="typeMismatch">
          Пожалуйста, укажите действительный адрес электронной почты
        </Form.Message>
      </div>
      <Form.Control asChild>
        <input className="Input" type="email" required placeholder="Example1337@gmail.com" />
      </Form.Control>
    </Form.Field>

    <Form.Field className="FormField" name="message">
      <div className="FormFieldHeader">
        <Form.Label className="FormLabel">Описание Вашей проблемы</Form.Label>
        <Form.Message className="FormMessage" match="valueMissing">
          Пожалуйста, введите описание проблемы
        </Form.Message>
      </div>
      <Form.Control asChild>
        <textarea className="Textarea" required placeholder="У меня возникла проблема с регистрацией на сервере.." />
      </Form.Control>
    </Form.Field>

    <div className="form-footer">
      <p className="alert">Поля со знаком "*", обязательны к заполнению!</p>
      <Form.Submit asChild>
        <button className="Button">
          Отправить форму <i className="fa-solid fa-paper-plane"></i>
        </button>
      </Form.Submit>
    </div>
  </Form.Root>
);

export default FormDemo;

