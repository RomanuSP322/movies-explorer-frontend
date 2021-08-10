import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';

function MoviesCard({ movie, onSaveMovie, onDeleteMovie, isMovieSaved }) {
  const location = useLocation();
  const [isLiked, setIsLiked] = useState(isMovieSaved(movie));

  function handleLikeClick() {
    setIsLiked(!isLiked);
    onSaveMovie(movie);
  }

  function handleDeleteClick() {
    setIsLiked(!isLiked);
    onDeleteMovie(movie);
  }

  const cardLikeButtonClassName = `movies-card__button movies-card__like-button ${
    isLiked ? 'movies-card__like-button_active' : null
  }`;

  const durationFormatting = (minutes) => {
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    return `${h > 0 ? `${h}ч ` : ''}${m}м`;
  };

  return (
    <div className='movies-card'>
      <a
        href={movie.trailerLink}
        className='movies-card__link'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img
          className='movies-card__image'
          src={
            movie.image.url && location.pathname === '/movies'
              ? `https://api.nomoreparties.co${movie.image.url}`
              : `${movie.image}`
          }
          alt='Постер к фильму'
        />
      </a>
      <h2 className='movies-card__title'>{movie.nameRU}</h2>
      {location.pathname === '/movies' ? (
        <button
          className={cardLikeButtonClassName}
          type='button'
          onClick={isLiked ? handleDeleteClick : handleLikeClick}
        ></button>
      ) : (
        <button
          className='movies-card__button movies-card__delete-button'
          type='button'
          onClick={handleDeleteClick}
        ></button>
      )}
      <p className='movies-card__duration'>
        {durationFormatting(movie.duration)}
      </p>
    </div>
  );
}

export default MoviesCard;
