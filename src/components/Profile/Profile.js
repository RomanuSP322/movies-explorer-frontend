import React from 'react';
import { NavLink } from 'react-router-dom';
import './Profile.css';
import Header from '../Header/Header';

function Profile() {
  const [name, setName] = React.useState('Виталий');
  const [email, setEmail] = React.useState('pochta@email.ru');

  function handleNameUpdater(e) {
    setName(e.target.value);
  }

  function handleEmailUpdater(e) {
    setEmail(e.target.value);
  }
  return (
    <div className='profile'>
      <Header loggedIn />
      <main className='profile__content'>
        <h1 className='profile__title'>Привет, Виталий!</h1>
        <form className='profile__form' name='user-data'>
          <label className='profile__label'>
            <h2 className='profile__subtitle'>Имя</h2>
            <input
              className='profile__input'
              type='name'
              name='user-name'
              value={name}
              required
              onChange={handleNameUpdater}
            />
          </label>
          <label className='profile__label profile__label_position_bottom'>
            <h2 className='profile__subtitle'>E-mail</h2>
            <input
              className='profile__input'
              type='email'
              name='user-email'
              value={email}
              onChange={handleEmailUpdater}
              required
            />
          </label>
          <button
            className='profile__button profile__button_type_edit'
            type='submit'
          >
            Редактировать
          </button>
        </form>
        <NavLink
          className='profile__button profile__button_type_logout'
          to='/signin'
        >
          Выйти из аккаунта
        </NavLink>
      </main>
    </div>
  );
}

export default Profile;
