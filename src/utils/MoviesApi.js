class MoviesApi {
  constructor(config) {
    this._url = config.url;
  }

  _response(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Произошла ошибка: ${res.status}`);
    }
  }

  getMovies() {
    return fetch(`${this._url}beatfilm-movies`).then(this._response);
  }
}

export const moviesApi = new MoviesApi({
  url: 'https://api.nomoreparties.co/',
});
