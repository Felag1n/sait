import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1 style={{ color: 'purple' }}>404 - Страница не найдена</h1>
      <p style={{ color: 'purple' }}>Извините, страница, которую вы ищете, не существует.</p>
      <Link to="/">Вернуться на главную</Link>
    </div>
  );
}

export default NotFoundPage;