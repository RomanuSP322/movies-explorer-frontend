import React from 'react';
import './NotFound.css';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className='notfound'>
      <h3 className='notfound__status'>404</h3>
      <p className='notfound__message'>Страница не найдена</p>
      <Link className='notfound__link' to='/'>
        Назад
      </Link>
    </div>
  );
}

export default NotFound;
