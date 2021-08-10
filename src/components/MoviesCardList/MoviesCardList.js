import React, { useEffect, useState } from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({
  movies,
  onSaveMovie,
  onDeleteMovie,
  isMovieSaved,
}) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [cardsPerPage, setCardsPerPage] = useState(null);
  const [next, setNext] = useState(null);
  const [currentCards, setcurrentCards] = useState(0);
  const [cardsToRender, setcardsToRender] = useState([]);
  const [moreBtnActive, setMoreBtnActive] = useState(false);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (windowWidth >= 1280) {
      setCardsPerPage(12);
      setNext(4);
      return;
    }
    if (windowWidth < 1280 && windowWidth > 990) {
      setCardsPerPage(9);
      setNext(3);
      return;
    }
    if (windowWidth <= 990 && windowWidth > 400) {
      setCardsPerPage(8);
      setNext(2);
      return;
    }
    if (windowWidth < 400) {
      setCardsPerPage(5);
      setNext(2);
      return;
    }
  }, [windowWidth]);

  useEffect(() => {
    const count = Math.min(movies.length, cardsPerPage);
    setcardsToRender(movies.slice(0, count));
    setcurrentCards(count);
  }, [cardsPerPage, movies]);

  useEffect(() => {
    if (currentCards >= movies.length || currentCards === 0) {
      setMoreBtnActive(false);
    } else {
      setMoreBtnActive(true);
    }
  }, [currentCards, movies]);

  const renderWithSlice = () => {
    const count = currentCards + next;
    const extraMovies = movies.slice(currentCards, count);
    setcardsToRender([...cardsToRender, ...extraMovies]);
    setcurrentCards(count);
  };

  return (
    <section className='cards-list'>
      <ul className='cards-list__list'>
        {cardsToRender.map((movieData) => (
          <li
            className='movies-card-list__item'
            key={movieData.id ? movieData.id : movieData.movieId}
          >
            <MoviesCard
              movie={movieData}
              onSaveMovie={onSaveMovie}
              onDeleteMovie={onDeleteMovie}
              isMovieSaved={isMovieSaved}
            />
          </li>
        ))}
      </ul>
      {moreBtnActive && (
        <button
          className='cards-list__button'
          type='button'
          onClick={renderWithSlice}
        >
          Ещё
        </button>
      )}
    </section>
  );
}

export default MoviesCardList;
