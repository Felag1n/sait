import React from 'react';
import * as Form from '@radix-ui/react-form';
import './Form.css';

const FormDemo = () => (
  <Form.Root className="FormRoot">
<Form.Field className="FormField" name="Name">
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
        <Form.Label className="FormLabel">Имя</Form.Label>
        <Form.Message className="FormMessage" match="valueMissing">
          Пожалуйста, введите свое имя
        </Form.Message>
      </div>
      <Form.Control asChild>
        <input className="Input" type="text" required />
      </Form.Control>
    </Form.Field>
    <Form.Field className="FormField" name="email">
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
        <Form.Label className="FormLabel">Email</Form.Label>
        <Form.Message className="FormMessage" match="valueMissing">
         Пожалуйста, введите свой email
        </Form.Message>
        <Form.Message className="FormMessage" match="typeMismatch">
        Пожалуйста, укажите действительный адрес электронной почты
        </Form.Message>
      </div>
      <Form.Control asChild>
        <input className="Input" type="email" required />
      </Form.Control>
    </Form.Field>
    <Form.Field className="FormField" name="question">
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
        <Form.Label className="FormLabel">Вопрос</Form.Label>
        <Form.Message className="FormMessage" match="valueMissing">
        Пожалуйста, введите свой вопрос
        </Form.Message>
      </div>
      <Form.Control asChild>
        <textarea className="Textarea" required />
      </Form.Control>
    </Form.Field>
    <Form.Submit asChild>
      <button className="Button" style={{ marginTop: 10 }}>
      Отправить вопрос
      </button>
    </Form.Submit>
  </Form.Root>
);

export default FormDemo;