import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import Preloader from '../Preloader/Preloader';
import { api } from '../../utils/MainApi';
import { moviesApi } from '../../utils/MoviesApi';
import * as apiAuth from '../../utils/AuthApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App() {
  const history = useHistory();
  const location = useLocation();
  const [token, setToken] = useState('');
  const [currentUser, setCurrentUser] = useState({});
  const [statusInfo, setStatusInfo] = useState('');
  const [moviesStatus, setMoviesStatus] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isAppLoading, setIsAppLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [filterOn, setFilterOn] = useState(false);

  function tokenCheck() {
    setIsAppLoading(true);
    const jwt = localStorage.getItem('jwt');
    const path = location.pathname;
    if (!jwt) {
      setIsLoggedIn(false);
      setIsAppLoading(false);
      return;
    }
    setToken(jwt);
    apiAuth
      .getContent(jwt)
      .then(() => {
        api
          .getUserInfo(jwt)
          .then((userData) => {
            setCurrentUser(userData);
          })
          .then(() => {
            history.push(path);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .then(() => {
        setIsLoggedIn(true);
      })
      .catch((error) => {
        setStatusInfo('Что-то пошло не так! Попробуйте ещё раз.');
        setMoviesStatus('Что-то пошло не так! Попробуйте ещё раз.');
      })
      .finally(() => setIsAppLoading(false));
  }

  function getBeatMovies() {
    setIsLoading(true);
    moviesApi
    .getMovies()
      .then((data) => {
        const beatMovies = data;
          localStorage.setItem('allMovies', JSON.stringify(beatMovies));
        setMoviesStatus('');
      })
      .catch(() => {
        localStorage.removeItem('movies');
        setMoviesStatus(
          'Во время запроса произошла ошибка. ' +
            'Возможно, проблема с соединением или сервер недоступен. ' +
            'Подождите немного и попробуйте ещё раз'
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function getSavedMovies(token) {
    if (token) {
      setIsAppLoading(true);
      api
        .getCards(token)
        .then((data) => {
          const savedArray = data.map((item) => ({
            ...item,
            id: item.movieId,
          }));
          localStorage.setItem('savedMovies', JSON.stringify(savedArray));
          setSavedMovies(savedArray);
          setMoviesStatus('');
        })
        .catch(() => {
          localStorage.removeItem('savedMovies');
          setSavedMovies([]);
          setMoviesStatus(
            'Во время запроса произошла ошибка. ' +
              'Возможно, проблема с соединением или сервер недоступен. ' +
              'Подождите немного и попробуйте ещё раз'
          );
        })
        .finally(() => setIsAppLoading(false));
    }
  }

  function getCurrentUser(jwt) {
    if (jwt) {
      apiAuth.getContent(jwt).then(() => {
        api
          .getUserInfo(jwt)
          .then((userData) => {
            setCurrentUser(userData);
          })
          .catch((err) => {
            console.log(err);
          });
      });
    }
  }

  function handleRegister(data) {
    return apiAuth
      .register(data)
      .then((data) => {
        handleLogin(data);
      })
      .then(() => setStatusInfo('Вы успешно зарегистрировались!'))
      .then(() => {
        history.push('./movies');
      })
      .then(() => {
        setStatusInfo('');
      })
      .catch(() => setStatusInfo('Что-то пошло не так! Попробуйте ещё раз.'));
  }

  function handleLogin(data) {
    return apiAuth
      .authorize(data)
      .then(({ token }) => {
        setIsLoggedIn(true);
        setToken(token);
        localStorage.setItem('jwt', token);
      })
      .then(() => {
        history.push('./movies');
      })
      .catch(() => setStatusInfo('Что-то пошло не так! Попробуйте ещё раз.'));
  }

  function handleLogout() {
    setIsLoggedIn(false);
    setToken();
    localStorage.removeItem('jwt');
    localStorage.removeItem('savedMovies');
    localStorage.removeItem('movies');
    localStorage.removeItem('allMovies');
    setSavedMovies([]);
    history.push('./');
  }

  function handleUpdateUser(userData) {
    api
      .editProfile(userData, token)
      .then((userData) => {
        setCurrentUser(userData);
      })
      .then(() => setStatusInfo('Профиль успешно изменен!'))
      .catch(() => setStatusInfo('Что-то пошло не так! Попробуйте ещё раз.'));
  }

  function handleClick() {
    setStatusInfo('');
  }

  const handleSaveMovie = (item) => {
    const savedMovie = {
      ...item,
      image: `https://api.nomoreparties.co${item.image.url}`,
      trailer: item.trailerLink,
      movieId: item.id,
      thumbnail: `https://api.nomoreparties.co${item.image.formats.thumbnail.url}`,
    };
    delete savedMovie['id'];
    delete savedMovie['trailerLink'];
    delete savedMovie['created_at'];
    delete savedMovie['updated_at'];
    api
      .editCard(savedMovie, token)
      .then((res) => {
        const extraMovies = [...savedMovies, res];
        setSavedMovies(extraMovies);
      })
      .catch((err) => console.log(err));
  };

  const handleDeleteMovie = (item) => {
    const movieId = item.id ? item.id : item.movieId;
    const deletedMovie = savedMovies.find((movie) => movieId === movie.movieId);
    if (!deletedMovie) {
      return;
    }
    api
      .deleteCard(deletedMovie._id, token)
      .then((res) => {
        const movies = savedMovies.filter(
          (item) => item.movieId !== res.movieId
        );
        setSavedMovies(movies);
      })
      .catch((err) => console.log(err));
  };

  const isMovieSaved = (movie) =>
    savedMovies.some((item) => item.movieId === movie.id);

  const handleShortFilm = (movies) =>
    movies.filter((item) => item.duration <= 40);

  const onFilter = () => {
    setFilterOn(!filterOn);
  };

  const searchFilter = (data, searchReq) => {
    if (searchReq) {
      const filter = new RegExp(searchReq, 'gi');
      const filterData = data.filter(
        (item) => filter.test(item.nameRU) || filter.test(item.nameEN)
      );
      if (filterData.length === 0) {
        setMoviesStatus('Ничего не найдено');
      } else {
        setMoviesStatus('');
      }
      return filterData;
    }
    return [];
  };

  function searchHandler(searchReq) {
    setMoviesStatus('');
    setIsLoading(true);
    setTimeout(() => {
      if (location.pathname === '/movies') {
        const allMovies = JSON.parse(localStorage.getItem('allMovies'));
        if (!allMovies) {
          getBeatMovies();
          const filteredMovies = searchFilter(movies, searchReq);
          setMovies(filteredMovies);
        } else {
          const filteredMovies = searchFilter(allMovies, searchReq);
          localStorage.setItem('movies', JSON.stringify(filteredMovies));
          setMovies(filteredMovies);
        }
      } else {
        const filteredMovies = searchFilter(savedMovies, searchReq);
        setSavedMovies(filteredMovies);
      }
      setIsLoading(false);
    }, 1000);
  }

  useEffect(() => {
    setMoviesStatus('');
  }, [location]);

  useEffect(() => {
    tokenCheck();
    getBeatMovies();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (
      isLoggedIn &&
      (location.pathname === '/signin' || location.pathname === '/signup')
    ) {
      history.push('./movies');
    }
  }, [isLoggedIn, location, history]);

  useEffect(() => {
    getCurrentUser(token);
    getSavedMovies(token);
    getBeatMovies()
    setMovies([]);
    const localMovies = JSON.parse(localStorage.getItem('movies'));
    if (localMovies) {
      setMovies(localMovies);
    } else {
      localStorage.removeItem('movies');
    }
  }, [token]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='app' onClick={handleClick}>
        {isAppLoading ? (
          <div className='app__preloader'>
            <Preloader />
          </div>
        ) : (
          <Switch>
            <Route path='/signup'>
              <Register onRegister={handleRegister} status={statusInfo} />
            </Route>
            <Route path='/signin'>
              <Login onLogin={handleLogin} status={statusInfo} />
            </Route>
            <Route path='/' exact>
              <Main loggedIn={isLoggedIn} />
            </Route>
            <ProtectedRoute
              loggedIn={isLoggedIn}
              path='/movies'
              component={Movies}
              allMovies={movies}
              onSaveMovie={handleSaveMovie}
              onDeleteMovie={handleDeleteMovie}
              isMovieSaved={isMovieSaved}
              filterShortFilm={handleShortFilm}
              filterOn={filterOn}
              onFilter={onFilter}
              searchHandler={searchHandler}
              isLoading={isLoading}
              moviesStatus={moviesStatus}
            />
            <ProtectedRoute
              loggedIn={isLoggedIn}
              path='/saved-movies'
              component={Movies}
              allMovies={savedMovies}
              onSaveMovie={handleSaveMovie}
              onDeleteMovie={handleDeleteMovie}
              isMovieSaved={isMovieSaved}
              filterShortFilm={handleShortFilm}
              filterOn={filterOn}
              onFilter={onFilter}
              searchHandler={searchHandler}
              isLoading={isLoading}
              moviesStatus={moviesStatus}
            />
            <ProtectedRoute
              loggedIn={isLoggedIn}
              path='/profile'
              component={Profile}
              onUpdate={handleUpdateUser}
              onLogout={handleLogout}
              status={statusInfo}
            />
            <Route path='*'>
              <NotFound />
            </Route>
          </Switch>
        )}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
