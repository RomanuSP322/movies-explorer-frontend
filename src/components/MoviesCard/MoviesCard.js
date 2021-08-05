import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';
import poster from '../../images/card__image1.jpg';

function MoviesCard() {
  const location = useLocation();
  const [isLiked, setIsLiked] = useState(false);
  function handleLikeClick() {
    setIsLiked(!isLiked);
  }

  const cardLikeButtonClassName = `movies-card__button movies-card__like-button ${
    isLiked ? 'movies-card__like-button_active' : null
  }`;
  return (
    <div className='movies-card'>
      <a
        href='https://www.youtube.com/watch?v=hU5rf6RbjOE'
        className='movies-card__link'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img className='movies-card__image' src={poster} alt='Постер' />
      </a>
      <h2 className='movies-card__title'>Пи Джей Харви: A dog called money</h2>
      {location.pathname === '/movies' ? (
        <button
          className={cardLikeButtonClassName}
          type='button'
          onClick={handleLikeClick}
        ></button>
      ) : (
        <button
          className='movies-card__button movies-card__delete-button'
          type='button'
        ></button>
      )}
      <p className='movies-card__duration'>1ч 42м</p>
    </div>
  );
}

export default MoviesCard;
