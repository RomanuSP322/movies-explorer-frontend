import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import '../Form/Form.css';
import Logo from '../Logo/Logo';

function Register() {
  return (
    <div className='register'>
      <form className='form'>
        <Logo />
        <h1 className='form__welcome'>Добро пожаловать!</h1>
        <label className='form__input-label'>Имя</label>
        <input
          required
          id='name'
          name='name'
          type='name'
          placeholder='Иван'
          className='form__input form__input_type_bold'
        />

        <label className='form__input-label'>Е-mail</label>
        <input
          required
          id='email'
          name='email'
          type='email'
          placeholder='pochta@email.ru'
          className='form__input form__input_type_bold'
        />

        <label className='form__input-label'>Пароль</label>
        <input
          required
          id='password'
          name='password'
          type='password'
          placeholder='********'
          className='form__input'
        />

        <button type='submit' className='form__button register__button'>
          Зарегистрироваться
        </button>
        <p className='form__text'>
          Уже зарегистрированы?{' '}
          <Link to='/signin' className='form__link'>
            Войти
          </Link>{' '}
        </p>
      </form>
    </div>
  );
}

export default Register;
