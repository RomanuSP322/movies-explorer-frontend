import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import '../Form/Form.css';
import Logo from '../Logo/Logo';
import useForm from '../../utils/UseForm';
import registerValidate from '../../utils/RegisterValidate';

function Register({ onRegister, status }) {
  const { values, errors, handleChange, isValid } = useForm(
    registerValidate,
    {}
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(values);
  };

  return (
    <div className='register'>
      <form className='form' onSubmit={handleSubmit} noValidate>
        <Logo />
        <h1 className='form__welcome'>Добро пожаловать!</h1>
        <label className='form__input-label'>Имя</label>
        <input
          onChange={handleChange}
          value={values.name || ''}
          required
          id='name'
          name='name'
          type='name'
          placeholder='Иван'
          className={`form__input form__input_type_bold ${
            errors.name && 'form__input_invalid'
          }`}
        />
        {errors.name && <p className='form__input_error'>{errors.name}</p>}
        <label className='form__input-label'>Е-mail</label>
        <input
          required
          onChange={handleChange}
          value={values.email || ''}
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
        <p className='register__status'>{status}</p>
        <button
          type='submit'
          className='form__button register__button'
          disabled={!isValid}
        >
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
