import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import '../Form/Form.css';
import Logo from '../Logo/Logo';
import useForm from '../../utils/UseForm';
import loginValidate from '../../utils/LoginValidate';

function Login({ onLogin, status }) {
  const { values, errors, handleChange, isValid } = useForm(loginValidate, {});

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ email: values.email, password: values.password });
  };

  return (
    <div className='login'>
      <form className='form' onSubmit={handleSubmit} noValidate>
        <Logo className='login__logo' />
        <h1 className='form__welcome'>Рады видеть!</h1>
        <label className='form__input-label'>Е-mail</label>
        <input
          onChange={handleChange}
          value={values.email || ''}
          required
          id='email'
          name='email'
          type='email'
          placeholder='pochta@email.ru'
          className={`form__input form__input_type_bold ${
            errors.email && 'form__input_invalid'
          }`}
        />
        {errors.email && <p className='form__input_error'>{errors.email}</p>}
        <label className='form__input-label'>Пароль</label>
        <input
          required
          onChange={handleChange}
          value={values.password || ''}
          id='password'
          name='password'
          type='password'
          placeholder='********'
          className={`form__input ${errors.password && 'form__input_invalid'}`}
        />
        {errors.password && (
          <p className='form__input_error'>{errors.password}</p>
        )}
        <p className='login__status'>{status}</p>
        <button
          type='submit'
          className='form__button login__button'
          disabled={!isValid}
        >
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
