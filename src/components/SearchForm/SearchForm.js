import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ onFilter, onSearch, filterOn }) {
  const [searchValue, setSearchValue] = useState('');
  const location = useLocation();

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchValue);
  };

  useEffect(() => setSearchValue(''), [location]);

  return (
    <div className='search'>
      <form className='search__form' name='find-movie' onSubmit={handleSubmit}>
        <label className='search__label search__label_type_input'>
          <input
            onChange={handleChange}
            value={searchValue}
            className='search__input'
            type='search'
            placeholder='Фильм'
            required
          />
        </label>
        <button className='search__button' type='submit' />
      </form>
      <div className='search__checkbox'>
        <FilterCheckbox onClickBox={onFilter} filterOn={filterOn} />
      </div>
    </div>
  );
}

export default SearchForm;
