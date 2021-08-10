const getMovies = () => {
  return fetch(`https://api.nomoreparties.co/beatfilm-movies`)
    .then((res) => res.json())
    .then((movies) => movies);
};

export default getMovies;
