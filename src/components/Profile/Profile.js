import React from 'react';
import { NavLink } from 'react-router-dom';
import './Profile.css';
import updateValidate from '../../utils/UpdateProfileValidate';
import useForm from '../../utils/UseForm';
import Header from '../Header/Header';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile({ onUpdate, onLogout, status }) {
  const currentUser = React.useContext(CurrentUserContext);

  const { values, errors, handleChange, isValid } = useForm(updateValidate, {
    name: currentUser.name,
    email: currentUser.email,
  });

  function handleSubmit(e) {
    e.preventDefault();
    onUpdate({
      name: values.name,
      email: values.email,
    });
  }

  function handleLogout(e) {
    e.preventDefault();
    onLogout();
  }

  return (
    <div className='profile'>
      <Header loggedIn />
      <main className='profile__content'>
        <h1 className='profile__title'>Привет, {currentUser.name}!</h1>
        <form
          className='profile__form'
          name='user-data'
          onSubmit={handleSubmit}
        >
          <label className='profile__label'>
            <h2 className='profile__subtitle'>Имя</h2>
            <input
              className={`profile__input ${
                errors.name && 'profile__input_invalid'
              }`}
              type='name'
              name='name'
              value={values.name}
              required
              onChange={handleChange}
            />
          </label>
          {errors.name && <p className='profile__input_error'>{errors.name}</p>}
          <label className='profile__label profile__label_position_bottom'>
            <h2 className='profile__subtitle'>E-mail</h2>
            <input
              className={`profile__input ${
                errors.email && 'profile__input_invalid'
              }`}
              id='email'
              type='email'
              name='email'
              value={values.email}
              onChange={handleChange}
              required
            />
          </label>
          {errors.email && (
            <p className='profile__input_error'>{errors.email}</p>
          )}
          <p className='profile__status'>{status}</p>
          <button
            className='profile__button profile__button_type_edit'
            type='submit'
            disabled={!isValid}
          >
            Редактировать
          </button>
        </form>
        <NavLink
          className='profile__button profile__button_type_logout'
          to='/signin'
          onClick={handleLogout}
        >
          Выйти из аккаунта
        </NavLink>
      </main>
    </div>
  );
}

export default Profile;
