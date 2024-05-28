import React, { useState } from 'react';
import * as Form from '@radix-ui/react-form';
import emailjs from 'emailjs-com';
import './Form.css';

const FormDemo = () => {
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const sendEmail = (event) => {
    event.preventDefault();
    setLoading(true);

    const serviceID = 'service_nh21zg8';
    const templateID = 'template_6800wha';
    const userID = 'V7bpqvaDSWxvdHgIe';

    const form = event.target;

    emailjs.sendForm(serviceID, templateID, form, userID)
      .then((result) => {
        setLoading(false);
        setStatusMessage('Email successfully sent!');
        console.log('Email successfully sent!', result.text); // Log success message
        form.reset();
      }, (error) => {
        setLoading(false);
        setStatusMessage(`Error sending email: ${error.text}`);
        console.error('Error sending email:', error.text); // Log error message
      });
  };

  return (
    <Form.Root className="FormRoot" onSubmit={sendEmail}>
      <Form.Field className="FormField" name="name">
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
          <Form.Label className="FormLabel">Имя</Form.Label>
          <Form.Message className="FormMessage" match="valueMissing">
            Пожалуйста, введите свое имя
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input className="Input" type="text" name="from_name" required aria-required="true" />
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
          <input className="Input" type="email" name="from_email" required aria-required="true" />
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
          <textarea className="Textarea" name="message" required aria-required="true" />
        </Form.Control>
      </Form.Field>
      <Form.Submit asChild>
        <button className="Button" style={{ marginTop: 10 }} disabled={loading}>
          {loading ? 'Отправка...' : 'Отправить вопрос'}
        </button>
      </Form.Submit>
      {statusMessage && <p className="StatusMessage">{statusMessage}</p>}
    </Form.Root>
  );
};

export default FormDemo;