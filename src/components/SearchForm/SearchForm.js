import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <div className='search'>
      <form className='search__form' name='find-movie'>
        <label className='search__label search__label_type_input'>
          <input
            className='search__input'
            type='search'
            placeholder='Фильм'
            required
          />
        </label>
        <button className='search__button' type='submit' />
      </form>
      <div className='search__checkbox'>
        <FilterCheckbox />
      </div>
    </div>
  );
}

export default SearchForm;
