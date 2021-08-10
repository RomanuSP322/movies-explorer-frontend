import React from 'react';
import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function Movies({
  loggedIn,
  allMovies,
  onSaveMovie,
  onDeleteMovie,
  isMovieSaved,
  savedMovies,
  filterShortFilm,
  filterOn,
  onFilter,
  searchHandler,
  isLoading,
  moviesStatus,
}) {
  return (
    <div className='movies'>
      <Header loggedIn={loggedIn} />
      <main className='movies__content'>
        <SearchForm
          onFilter={onFilter}
          onSearch={searchHandler}
          filterOn={filterOn}
        />
        {moviesStatus && <h3 className='movies_status'>{moviesStatus}</h3>}
        {isLoading ? (
          <Preloader />
        ) : (
          <MoviesCardList
            movies={filterOn ? filterShortFilm(allMovies) : allMovies}
            onSaveMovie={onSaveMovie}
            onDeleteMovie={onDeleteMovie}
            isMovieSaved={isMovieSaved}
            savedMovies={savedMovies}
          />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default Movies;
