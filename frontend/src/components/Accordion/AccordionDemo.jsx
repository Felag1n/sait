import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import classNames from 'classname';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import './Accordion.css';


const AccordionDemo = () => (
  <Accordion.Root className="AccordionRoot" type="single" defaultValue="item-1" collapsible>
    <Accordion.Item className="AccordionItem" value="item-1">
      <AccordionTrigger>Какие жанры музыки доступны на вашем сайте?</AccordionTrigger>
      <AccordionContent>На нашем сайте представлены различные жанры музыки, включая поп, рок, электронику, хип-хоп, джаз и многое другое.</AccordionContent>
    </Accordion.Item>

    <Accordion.Item className="AccordionItem" value="item-2">
      <AccordionTrigger>Как я могу зарегистрироваться на вашем сайте?</AccordionTrigger>
      <AccordionContent>
      Для регистрации на нашем сайте просто нажмите на кнопку "Регистрация" и заполните необходимую информацию, такую как ник, электронная почта и пароль.
      </AccordionContent>
    </Accordion.Item>

    <Accordion.Item className="AccordionItem" value="item-3">
      <AccordionTrigger>Как я могу найти определенную песню или исполнителя на вашем сайте?</AccordionTrigger>
      <Accordion.Content className="AccordionContent">
        <div className="AccordionContentText">
        Для поиска конкретной песни или исполнителя воспользуйтесь функцией поиска на главной странице сайта.
        </div>
      </Accordion.Content>
    </Accordion.Item>

    <Accordion.Item className="AccordionItem" value="item-4">
      <AccordionTrigger>Можно ли слушать музыку на вашем сайте без регистрации?
</AccordionTrigger>
      <Accordion.Content className="AccordionContent">
        <div className="AccordionContentText">
        Да, вы можете слушать музыку без регистрации, но для доступа к некоторым функциям сайта может потребоваться создание аккаунта.
        </div>
      </Accordion.Content>
    </Accordion.Item>

    <Accordion.Item className="AccordionItem" value="item-5">
      <AccordionTrigger>Как я могу скачать песню с вашего сайта?</AccordionTrigger>
      <Accordion.Content className="AccordionContent">
        <div className="AccordionContentText">
        На данный момент у нас нет функции загрузки песен, но вы можете слушать музыку онлайн без ограничений.
        </div>
      </Accordion.Content>
    </Accordion.Item>

    <Accordion.Item className="AccordionItem" value="item-4">
      <AccordionTrigger>Предоставляете ли вы техническую поддержку пользователям вашего сайта?</AccordionTrigger>
      <Accordion.Content className="AccordionContent">
        <div className="AccordionContentText">
        Да, наша служба поддержки готова помочь вам решить любые технические проблемы или вопросы, связанные с использованием сайта.
        </div>
      </Accordion.Content>
    </Accordion.Item>

  </Accordion.Root>
);

const AccordionTrigger = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Header className="AccordionHeader">
    <Accordion.Trigger
      className={classNames('AccordionTrigger', className)}
      {...props}
      ref={forwardedRef}
    >
      {children}
      <ChevronDownIcon className="AccordionChevron" aria-hidden />
    </Accordion.Trigger>
  </Accordion.Header>
));

const AccordionContent = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Content
    className={classNames('AccordionContent', className)}
    {...props}
    ref={forwardedRef}
  >
    <div className="AccordionContentText">{children}</div>
  </Accordion.Content>
));

export default AccordionDemo;