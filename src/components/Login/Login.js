import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import '../Form/Form.css';
import Logo from '../Logo/Logo';
function Login() {
  return (
    <div className='login'>
      <form className='form'>
        <Logo className='login__logo' />
        <h1 className='form__welcome'>Рады видеть!</h1>
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

        <button type='submit' className='form__button login__button'>
          Войти
        </button>
        <p className='form__text'>
          Ещё не зарегистрированы?{' '}
          <Link to='/signup' className='form__link'>
            Регистрация
          </Link>{' '}
        </p>
      </form>
    </div>
  );
}

export default Login;
